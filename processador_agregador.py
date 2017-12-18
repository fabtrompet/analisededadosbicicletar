from glob import glob
import pandas as pd
from sqlalchemy import create_engine
import datetime


def listar_arquivos():
	arquivos = glob("caminho dos arquivos")
	arquivos.sort()
	dataframe = pd.DataFrame()
	tempoinicial = '2017-04-01 00:00:01';
	date_1 = datetime.datetime.strptime(tempoinicial, "%Y-%m-%d %H:%M:%S")
	date_1 = date_1 + datetime.timedelta(minutes=15)
	for caminho in arquivos:
		data = pd.read_csv(caminho, delimiter=";", header=None)
		data2 = data.drop([0,1,2,3,4,8,10,11], axis=1)
		date_teste = datetime.datetime.strptime(caminho.split("/")[5]+" "+caminho.split("/")[6].split(".")[0], "%Y%m%d %H:%M:%S")
		if date_teste < date_1:
			temp = date_1 - datetime.timedelta(minutes=15) 
			data2['tempo'] = pd.to_datetime(temp)
			dataframe = dataframe.append(data2, ignore_index=True)
		else:
			date_1 = date_1 + datetime.timedelta(minutes=15)
			temp = date_1 - datetime.timedelta(minutes=15)
			salva_dados(dataframe)
			dataframe = pd.DataFrame()
			data2['tempo'] = pd.to_datetime(temp)
			dataframe = dataframe.append(data2, ignore_index=True)

			
def listar_ativos(dataframe,tam):
	lista_ativo = []

	dataframe = dataframe.apply(pd.Series.value_counts)
	for i in range(1,tam):
		try:
			lista_ativo.append(dataframe[i]['A']/(dataframe[i]['I'] + dataframe[i]['A']))
		except:
			try:
				dataframe[i]['A']
				lista_ativo.append(1)
			except:
				lista_ativo.append(0)
	return lista_ativo

def listar_emoperacao(dataframe,tam):
	lista_emoperacao = []
	dataframe = dataframe.apply(pd.Series.value_counts)
	for i in range(1,tam):
		try:
			lista_emoperacao.append(dataframe[i]['EO']/(dataframe[i]['EM'] + dataframe[i]['EO']))
		except:
			try:
				dataframe[i]['EO']
				lista_emoperacao.append(1)
			except:
				lista_emoperacao.append(0)
	return lista_emoperacao

def variancapramenos(dataframe,tam):
	data = pd.DataFrame(index=range(1,tam),columns=['var_menos'])
	cont=1
	soma=0
	for i in dataframe:
		primeiro = 0
		for x in i[1]:
			if primeiro == x:
				pass
			elif primeiro > x:
				soma = soma + (primeiro-x)
				primeiro=x
			else:
				primeiro=x		
		data.var_menos[cont] = int(soma)
		cont+=1
		soma=0
	return data

def variancapramais(dataframe,tam):
	data = pd.DataFrame(index=range(1,tam),columns=['var_mais'])
	cont=1
	soma=0
	for i in dataframe:
		primeiro = 1000
		for x in i[1]:
			if primeiro == x:
				pass
			elif primeiro < x:
				soma = soma + (x - primeiro)
				primeiro=x
			else:
				primeiro=x		
		data.var_mais[cont] = int(soma)
		cont+=1
		soma=0
	return data

def salva_dados(dataframe):
	tam = len(dataframe.groupby(12)[7]) + 1
	engine = create_engine('conexao com o banco')
	salvar = pd.DataFrame(index=range(1,tam))
	dataframe = dataframe.replace(["'"],[''], regex=True)
	dataframe[7] = pd.to_numeric(dataframe[7], errors='coerce')
	dataframe[9] = pd.to_numeric(dataframe[9], errors='coerce')

	salvar.add_suffix('_Count').reset_index()
	salvar['media_bic'] = dataframe.groupby(12)[7].agg([pd.np.mean])
	salvar['desvio_bic'] = dataframe.groupby(12)[7].agg([pd.np.std])
	salvar['max_bic'] = dataframe.groupby(12)[7].agg([pd.np.max])
	salvar['min_bic'] = dataframe.groupby(12)[7].agg([pd.np.min])
	salvar['media_vag'] = dataframe.groupby(12)[9].agg([pd.np.mean])
	salvar['desvio_vag'] = dataframe.groupby(12)[9].agg([pd.np.std])
	salvar['max_vag'] = dataframe.groupby(12)[9].agg([pd.np.max])
	salvar['min_vag'] = dataframe.groupby(12)[9].agg([pd.np.min])
	salvar['id_estacao'] = dataframe.groupby(12)[12].agg([pd.np.mean])
	salvar['quantidade'] = dataframe.groupby(12)[7].size();
	salvar['var_menos'] = variancapramenos(dataframe.groupby(12)[7],tam)
	salvar['var_mais'] = variancapramais(dataframe.groupby(12)[7],tam)
	tam1 = tam - 1
	temp = dataframe['tempo'][0:tam1]
	temp.index = range(1,tam)
	nome_arq = temp[1]
	print (nome_arq)
	salvar['tempo'] = temp
	ativos = dataframe.groupby(12)[5]
	emoperacao = dataframe.groupby(12)[6]
	
	lista_ativo = listar_ativos(ativos,tam)

	lista_emoperacao = listar_emoperacao(emoperacao,tam)


	salvar['ativo'] = lista_ativo
	salvar['emoperacao'] = lista_emoperacao	
	salvar.to_sql('nome da tabela', engine, index = False, if_exists="append")
	

listar_arquivos()
