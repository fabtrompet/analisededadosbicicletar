import requests
from bs4 import BeautifulSoup
import os
import datetime
import time

def pegaDados():
	date = datetime.datetime.today().strftime('%Y%m%d');	
	hora = datetime.datetime.today().strftime('%H:%M:%S');
	page = requests.get("http://www.bicicletar.com.br/mapaestacao.aspx")

	soup = BeautifulSoup(page.content, 'html.parser')

	fim = soup.findAll('script')[3].getText().index("80]")+3

	estacoes = soup.findAll('script')[3].getText()[30:fim].replace("],", "*").replace("[","").replace("]","").replace("',", "';").replace(",-",";-").replace(",'",";'").replace("'","").split("*")
	
	if not os.path.isdir("caminho do arquivo"+date):
		os.makedirs("caminho do arquivo"+date)
		salvar(estacoes,date,hora)
	else:
		salvar(estacoes,date,hora)
def salvar(estacoes,date,hora):
	arq = open('caminho do arquivo'+date+'/'+hora+'.csv', 'w')
	for estacao in estacoes:
		arq.write(estacao+'\n')
	arq.close()
pegaDados()
time.sleep(30)
pegaDados()
