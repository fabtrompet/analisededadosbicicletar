<?php 
include_once('conexao.php');

$dados = array();



switch ($_POST["tipo"]) {
	case 'todos':
		$query = "select id_estacao, sum(var_menos) + sum(var_mais) as total from dados group by id_estacao ORDER BY id_estacao";
		break;
	case 'dadoshisto':
		$query = sprintf("select tempo,media_bic, loc_geo[0] as lng,loc_geo[1] as lat from dados, estacao where tempo = '%s' and id_estacao = id group by id_estacao,id,tempo,media_bic ORDER BY id_estacao",$_POST['temp']);
		break;
	case 'dadoshisto2':
		$query = sprintf("select to_char(tempo, 'HH24:MI') as tempo,media_bic from dados where to_char(tempo, 'YYYY-MM-DD') = '%s' and id_estacao = %u",$_POST['temp'],$_POST['id_estacao']);
		break;		
	case 'temp':
		$query = sprintf("select * from temp");	
		break;
	case 'mediatempo':
		$query = sprintf("select ( 1.96 * (stddev_samp(total)/ (sqrt(count(total))))) as error,avg(total) as media from (select avg(teste)*24 as total,dias from (select media_bic,to_char(tempo, 'YYYY-MM-DD') as dias, CASE WHEN media_bic>=1 THEN 1 WHEN media_bic<1 THEN 0 END as teste from dados where id_estacao = %u and EXTRACT(dow from tempo) = %u ) grp group by dias) gpr2", $_POST['id_estacao'],$_POST['dia_semana']);
		break;
	case 'porcentagem_vag':
		$query = sprintf("select avg(teste)*100 as total from (select media_vag,CASE WHEN media_vag>=1 THEN 1 WHEN media_vag<1 THEN 0 END as teste from dados where id_estacao = %u and EXTRACT(dow from tempo) = %u and to_char(tempo, 'HH24') = '%s') grp", $_POST['id_estacao'],$_POST['dia_semana'],$_POST['hora']);
		break;	
	case 'porcentagem_hora':
		$query = sprintf("select avg(teste)*100 as total from (select media_bic, CASE WHEN media_bic>=1 THEN 1 WHEN media_bic<1 THEN 0 END as teste from dados where id_estacao = %u and EXTRACT(dow from tempo) = %u and to_char(tempo, 'HH24') = '%s') grp", $_POST['id_estacao'],$_POST['dia_semana'],$_POST['hora']);
		break;
	case 'porcentagem_hora2':
		$query = sprintf("select (1.96 * (stddev_samp(total)/ (sqrt(count(total))))) as error, avg(total) as media from (select (100 * (CAST(soma as float) / CAST(quant as float))) as total from(select sum(teste) as soma ,count(teste) as quant, dia from (select to_char(tempo, 'YYYY-MM-DD') as dia,media_bic, CASE WHEN media_bic>=1 THEN 1 WHEN media_bic<1 THEN 0 END as teste from dados where id_estacao = %u and EXTRACT(dow from tempo) = %u and to_char(tempo, 'HH24') = '%s') grp group by dia) grp2) grp3", $_POST['id_estacao'],$_POST['dia_semana'],$_POST['hora']);
		break;
	case 'porcentagem_horano':
		$query = sprintf("select (1.96 * (stddev_samp(total)/ (sqrt(count(total))))) as error, avg(total) as media from (select avg(teste)*100 as total, dia from (select to_char(tempo, 'YYYY-MM-DD') as dia,media_bic, CASE WHEN media_bic>=1 THEN 0 WHEN media_bic<1 THEN 1 END as teste from dados where id_estacao = %u and EXTRACT(dow from tempo) = %u and to_char(tempo, 'HH24') = '%s') grp group by dia) grp2", $_POST['id_estacao'],$_POST['dia_semana'],$_POST['hora']);
		break;			
	case 'mediatemposem':
		$query = sprintf("select (1.96 * (stddev_samp(total)/ (sqrt(count(total))))) as error, avg(total) as media from (select avg(teste)*24 as total,dias from (select media_bic,to_char(tempo, 'YYYY-MM-DD') as dias, CASE WHEN media_bic>=1 THEN 0 WHEN media_bic<1 THEN 1 END as teste from dados where id_estacao = %u and EXTRACT(dow from tempo) = %u ) grp group by dias) grp", $_POST['id_estacao'],$_POST['dia_semana']);
		break;
	case 'mediatempoina':
		$query = sprintf("select avg(media) as media, (1.96 * (stddev_samp(media)/ (sqrt(count(media))))) as error from (select avg(ativo)*24 as media from (select (1-ativo) as ativo,to_char(tempo, 'YYYY-MM-DD') as dias from dados where EXTRACT(dow from tempo) = %u and id_estacao = %u) grp group by dias) grp2", $_POST['dia_semana'],$_POST['id_estacao']);
		break;		
	case 'maismenos':
		$query = sprintf("select id_estacao, nome, sum(var_menos) + sum(var_mais) as total from dados, estacao where id = id_estacao group by id_estacao,nome ORDER BY total %s limit 6	", $_POST['ordem']);
		break;
	case 'emmanutencao':
		$query = sprintf("select id_estacao, nome, (avg(1 - emoperacao))*100 as total from (select id_estacao as ids from dados where emoperacao != 1 group by id_estacao) grp, estacao, dados where ids = id_estacao and id_estacao = id group by id_estacao,nome order by total DESC limit 6");
		break;	
	case 'maismenosina':
		$query = sprintf("select id_estacao,nome,avg((1-ativo))*100 as total from dados,estacao where id = id_estacao group by id_estacao,nome order by total %s limit 6", $_POST['ordem']);
		break;	
	case 'melhoresestacoes':
		$query = sprintf("select lat,lng,nome,endereco,id, avg(teste)*100 as total from(select loc_geo[0] as lat, loc_geo[1] as lng,id,nome,endereco,media_bic,to_char(tempo, 'HH24') as hora, CASE WHEN media_bic>=1 THEN 1 WHEN media_bic<1 THEN 0 END as teste from dados,estacao where id_estacao = id and EXTRACT(dow from tempo) = %u and to_char(tempo, 'HH24') = '%s' and earth_box(ll_to_earth(loc_geo[0],loc_geo[1]), %u) @> ll_to_earth(%f, %f)) grp group by nome,endereco,lat,lng,id order by total desc",$_POST['dia_semana'],$_POST['hora'],$_POST['raio'],$_POST['lat'],$_POST['lng']);
		break;
	case 'maisutilizadas':
		$query = sprintf("select id_estacao,nome,sum(var_mais + var_menos) as total from dados,estacao t2 where EXTRACT(dow from tempo) = %u and EXTRACT(hour from tempo) = %u and id_estacao = t2.id group by id_estacao,nome order by total desc limit 5",$_POST['dia_semana'],$_POST['hora']);
		break;
	case 'maisutilizadas_diasemana':
		$query = sprintf("select id_estacao, nome,sum(var_mais + var_menos) as total from dados,estacao t2 where EXTRACT(dow from tempo) = %u and id_estacao = t2.id group by id_estacao,nome order by total %s limit 5",$_POST['dia_semana'],$_POST['ordem']);
		break;	
	case 'bicdisponiveis':
		$query = sprintf("select id_estacao,nome,avg(teste) * 100 as total from (select id_estacao,nome,media_bic,to_char(tempo, 'HH24') as hora, CASE WHEN media_bic>=1 THEN 1 WHEN media_bic<1 THEN 0 END as teste from dados, estacao where id = id_estacao and EXTRACT(dow from tempo) = %u and to_char(tempo, 'HH24') = '%s' order by hora DESC) grp group by nome,id_estacao order by total desc limit 5",$_POST['dia_semana'],$_POST['hora']);
		break;					
	case 'dia_semana':
		$query = sprintf("select sum(var_menos) + sum(var_mais) as total, EXTRACT(dow from tempo) as dia_semana from dados where id_estacao = %u group by id_estacao,dia_semana order by dia_semana", $_POST['id_estacao']);
		break;
	case 'dia_semana_ina':
		$query = sprintf("select EXTRACT(dow from tempo) as dia_semana,avg((1-ativo))*100 as total from dados where id_estacao = %u group by dia_semana order by dia_semana", $_POST['id_estacao']);
		break;
	case 'total_semana':
		$query = sprintf("select sum(var_menos) + sum(var_mais) as total, EXTRACT(hour from tempo) as hora, EXTRACT(dow from tempo) as dia from dados where id_estacao = %u group by id_estacao,hora,dia order by total DESC limit 1", $_POST['id_estacao']);
		break;
	case 'horario_semana':
		$query = sprintf("select sum(total) as total, hora from (select sum(var_menos) + sum(var_mais) as total, EXTRACT(hour from tempo) as hora,tempo, EXTRACT(dow from tempo) as dia from dados where id_estacao = %u and EXTRACT(dow from tempo) = %u group by id_estacao,tempo order by hora DESC) grp group by hora order by hora", $_POST['id_estacao'],$_POST['dia_semana']);
		break;
	case 'porcentagem_dia_semana':
		$query = sprintf("select avg(teste) * 100 as total,dia_semana from (select media_bic,EXTRACT(dow from tempo) as dia_semana, CASE WHEN media_bic>=1 THEN 1 WHEN media_bic<1 THEN 0 END as teste from dados where id_estacao = %u order by dia_semana DESC) grp group by dia_semana order by dia_semana", $_POST['id_estacao']);
		break;
	case 'porcentagem_dia_semana_sem':
		$query = sprintf("select (100 * (CAST(soma as float) / CAST(quant as float))) as total, dia_semana from (select sum(teste) as soma ,count(teste) as quant,dia_semana from (select media_bic,EXTRACT(dow from tempo) as dia_semana, CASE WHEN media_bic>=1 THEN 0 WHEN media_bic<1 THEN 1 END as teste from dados where id_estacao = %u order by dia_semana DESC) grp group by dia_semana order by dia_semana DESC ) grp2 order by dia_semana", $_POST['id_estacao']);
		break;		
	case 'horario_disponiveis':
		$query = sprintf("select avg(teste) * 100 as total,hora from (select media_bic,to_char(tempo, 'HH24') as hora, CASE WHEN media_bic>=1 THEN 1 WHEN media_bic<1 THEN 0 END as teste from dados where id_estacao = %u and EXTRACT(dow from tempo) = %u order by hora DESC) grp group by hora order by hora", $_POST['id_estacao'],$_POST['dia_semana']);
		break;		
	case 'estacoes':
		$query = sprintf("select id,nome,loc_geo[0] as lat,loc_geo[1] as lng from estacao");
		break;
	case 'estacao':
		$query = sprintf("select id,nome,loc_geo[0] as lat,loc_geo[1] as lng from estacao where id = %u", $_POST['id_estacao']);
		break;			
	default:
		$query = "";
		break;
}


//$query = "select * from dados where index = 13 and tempo >= '2017-04-03 00:00:00' and tempo <= '2017-04-03 23:59:00'";

$resposta = pg_query($query) or die ("Error Consulta: ". pg_last_error());


while ($row = pg_fetch_array($resposta, null, PGSQL_ASSOC)){
	$dados[] = $row;
}

echo json_encode($dados);

 ?>	