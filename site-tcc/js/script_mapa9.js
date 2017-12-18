$(document).ready(function(){
      // This example requires the Visualization library. Include the libraries=visualization
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization">

      //var estacoes = [['Praça Luíza Távora',-3.7321944,-38.510347,'Avenida Santos Dumont, 1546, ao lado da Coord. do Gov. do Estado do Ceará / Esquina Carlos Vasconcelos','Coord. do Gov. do Estado do Ceará','A','EO','4','4','8','Est_Normal 1','img/estacaook.png',1],['José Vilar',-3.7341732,-38.504149,'Rua José Vilar, lateral do 2353 (Restaurante Zahlé) / Esquina Avenida Santos Dumont','Restaurante Zahlé','A','EO','1','1','11','Est_Normal 1','img/estacaook.png',2],['Shopping Del Paseo',-3.7367176,-38.496830,'Avenida Santos Dumont, 3131 (Shopping del Paseo) / Esquina Rua Leonardo Mota','Shopping Del Paseo','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',3],['BNB Clube',-3.7386073,-38.491576,'Avenida Santos Dumont, oposto ao BNB Clube / Esquina Rua Coronel Jucá','BNB Clube','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',4],['Frei Mansueto',-3.7359524,-38.488797,'Rua Dom Luís, 1400B / Esquina Rua Frei Mansueto','','A','EO','2','2','10','Est_Normal 1','img/estacaook.png',5],['Livraria Cultura',-3.7351546,-38.492531,'Rua Senador Virgílio Távora, lateral do número 1010 (Shopping Varanda) / Esquina Rua Dom Luís','Livraria Cultura','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',6],['Praça Portugal',-3.7336156,-38.496978,'Praça Portugal, na calçada em frente a canteiro do Shopping Aldeota / Esquina Avenida Dom Luís','Shopping Aldeota','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',7],['Joaquim Nabuco',-3.7321014,-38.500273,'Rua Joaquim Nabuco, 730 / Esquina Rua Dom Luís','','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',8],['Moreira da Rocha',-3.7267958,-38.506248,'Rua Deputado Moreira da Rocha, lateral do número 475 / Esquina Rua Rui Barbosa','','A','EO','3','3','9','Est_Normal 1','img/estacaook.png',9],['Campo do América',-3.7302816,-38.502894,'Rua José Vilar, 540 / Esquina Rua Tenente Benévolo','','A','EO','3','3','9','Est_Normal 1','img/estacaook.png',10],['Círculo Militar',-3.730343 ,-38.496304,'Rua Canuto de Aguiar, 712B / Esquina Rua Desembargador Moreira','','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',11],['Ana Bilhar',-3.7308997,-38.491505,'Rua Ana Bilhar, 1001 (Loja Terra Brasilis) / Esquina Avenida Senador Virgílio Távora','','A','EO','6','6','6','Est_Normal 1','img/estacaook.png',12],['Aterrinho da Praia de Iracema',-3.7202276,-38.511660,'Avenida Beira Mar, 916 / Esquina Rua João Cordeiro','Sorvetão','A','EO','11','11','1','Est_Normal 1','img/estacaook.png',13],['Aterro Praia de Iracema',-3.7233893,-38.505394,'Rua Rui Barbosa, 1680 (Boteco da Praia) / Esquina Avenida Beira Mar','Boteco da Praia','A','EO','2','2','10','Est_Normal 1','img/estacaook.png',14],['Náutico',-3.7260009,-38.495741,'Avenida Beira Mar, em frente ao número 2780 (Edifício Arpoador) / Esquina com a Rua Visconde de Mauá','HOTEL PRAIANO','A','EO','2','2','10','Est_Normal 1','img/estacaook.png',15],['Floriano Peixoto',-3.7311140,-38.528349,'Rua Floriano Peixoto, oposto ao estacionamento Lup Park / Esquina Rua Pedro I','','A','EO','11','11','1','Est_Normal 1','img/estacaook.png',16],['BNB Cultural Catedral',-3.7257252,-38.525549,'Avenida Conde D´Eu, em frente ao Centro Cultural BNB / Esquina Rua Senador Almir Pinto','Catedral','A','EO','2','2','10','Est_Normal 1','img/estacaook.png',17],['Praça do Ferreira',-3.7276737,-38.527373,'Praça do Ferreira, na Rua Floriano Peixoto, 625 / Esquina Rua Pedro Borges','Praça do Ferreira','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',18],['Praça Coração de Jesus',-3.7315373,-38.526595,'Rua Solon Pinheiro, oposto ao Mercado Super Lagoa / Esquina Rua Dom Pedro I','Praça Coração de Jesus','A','EO','1','1','11','Est_Normal 1','img/estacaook.png',19],['Dragão do Mar',-3.7218335,-38.519528,'Rua Dragão do Mar, em frente ao Centro Dragão do Mar / Esquina Rua Almirante Jaceguai','Dragão do Mar','A','EO','6','6','6','Est_Normal 1','img/estacaook.png',20],['Monsenhor Tabosa',-3.7238918,-38.514743,'Rua Monsenhor Tabosa, 518 / Esquina Rua Nogueira Acioli','Monsenhor Tabosa','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',21],['João Cordeiro',-3.7266326,-38.513479,'Rua João Cordeiro, oposto a EEFM Santa Luzia / Esquina Rua Tenente Benévolo','EEFM Santa Luzia','A','EO','5','5','7','Est_Normal 1','img/estacaook.png',22],['UNIMED',-3.7307919,-38.514873,'Avenida Santos Dumont / Esquina Rua João Cordeiro','UNIMED','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',23],['Rui Barbosa',-3.7368529,-38.509719,'Rua Rui Barbosa, em frente ao SENAC / Esquina Rua João Carvalho','SENAC','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',24],['Torres Câmara',-3.7372182,-38.501927,'Rua Joaquim Nabuco, em frente ao Edifício Embratel / Esquina Rua Torres Câmara','Edifício Embratel','A','EO','1','1','11','Est_Normal 1','img/estacaook.png',25],['FIC Aldeota',-3.7427150,-38.501572,'Rua Visconde de Mauá, em frente ao FIC Aldeota / Esquina Rua General Tertuliano Potiguara','FIC Aldeota','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',26],['Praça das Flores',-3.7384735,-38.498159,'Praça das Flores, na Rua Eduardo Garcia / Esquina Rua Barbosa de F','Praça das Flores','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',27],['Carrefour',-3.7431306,-38.509695,'Av. Antonio Sales, em frente ao Carrefour / Esquina Avenida Barão de Studart','Carrefour','A','EO','1','1','11','Est_Normal 1','img/estacaook.png',28],['Praça da Imprensa',-3.7457482,-38.501683,'Avenida Antônio Sales, na Praça da Imprensa / Esquina Avenida Desembargador Moreira','Praça da Imprensa','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',29],['Assembleia Legislativa',-3.7511158,-38.502065,'Rua Barbosa de Freitas, em frente a Assembléia Legislativa (Edificio Senador César Cals) / Esquina Avenida Pontes Vieira','Assembléia Legislativa','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',30],['Terminal do Papicu',-3.7387010,-38.485177,'Rua Pereira de Miranda, em frente ao Terminal do Papicu / Próximo à Avenida Almirante Henrique Sabóia','Terminal de Papicu','A','EO','4','4','8','Est_Normal 1','img/estacaook.png',31],['Praça da Gentilândia',-3.7425364,-38.537600,'Rua Waldery Uchoa, 2861 / Esquina Avenida 13 de Maio','Praça da Gentilândia','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',32],['Reitoria UFC',-3.7410964,-38.539249,'Avenida da Universidade, 2854 / Esquina Av. 13 de Maio','UFC','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',34],['Praça da Bandeira',-3.7330790,-38.532429,'Praça da Bandeira, na Meton de Alencar, oposto a Faculdade de Direito / Esquina Rua General Sampaio','Faculdade de Direito','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',35],['Instituto dos Cegos',-3.7331071,-38.551978,'Canteiro Central da Avenida Bezerra de Menezes, 801 / Esquina Rua Padre Anchieta','Instituto dos Cegos','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',38],['Praça Monte Castelo',-3.7284071,-38.550369,'Praça João Pontes, 643 / Esquina Rua Antônio Drumond','Praça Monte Castelo','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',39],['Frangolândia Sgt. Hermínio',-3.7249075,-38.551085,'Rua Padre Anchieta, em frente ao Supermercado Frangolândia / Esquina Avenida Sargento Hermínio Sampaio','Supermercado Frangolândia','A','EO','0','0','14','Est_Vazia -1','img/estacaocheia.png',40],['Érico Mota',-3.7354169,-38.563427,'Avenida Bezerra de Menezes, 2080 / Esquina Rua Eduardo Barros Leal','Esquina com a Rua Eduardo Barros Leal','A','EO','3','3','9','Est_Normal 1','img/estacaook.png',41],['North Shopping',-3.7359254,-38.566853,'Avenida Bezerra de Menezes, 2500','North Shopping','A','EO','1','1','11','Est_Normal 1','img/estacaook.png',42],['Campus do Pici - UFC',-3.7386180,-38.569411,'Rua Acesso Público, próximo à entrada da UFC / Esquina com a Avenida Humberto Monte','UFC','A','EO','2','2','12','Est_Normal 1','img/estacaook.png',43],['Regional 3',-3.7397020,-38.556388,'Rua Dom Lino, 590 / Esquina Avenida Jovita Feitosa, lateral da Secretaria Regional 3','Secretaria Regional 3','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',45],['HEMOCE',-3.7490591,-38.550532,'Rua Alexandre Baraúna, 773 / Esquina Rua Capitão Francisco Pedro','','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',47],['Praça Jardim América',-3.7509275,-38.546632,'Rua Carlos Câmara / Rua Delmiro Faria, em frente à Praça Jardim América','','A','EO','0','0','14','Est_Vazia -1','img/estacaocheia.png',48],['Esplanada Montese',-3.7627184,-38.546939,'Avenida Professor Gomes de Matos, 1157 / Esquina Rua Sátiro Dias','','A','EO','12','12','0','Est_Cheia 0','img/estacaovazia.png',52],['Extra Aguanambi',-3.7487194,-38.524259,'Rua Coronel Pergentino / Esquina Avenida Aguanambi','','A','EO','7','7','5','Est_Normal 1','img/estacaook.png',53],['Igreja de Fátima',-3.7523403,-38.525260,'Rua Dom Sebastião Leme, em frente à Praça Nossa Senhora de Fátima / Esquina Avenida 13 de Maio','','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',54],['Banco do Brasil - 13 de Maio',-3.7483832,-38.530240,'Rua Padre Barbosa de Jesus, oposto ao número 1345 / Esquina com a Avenida 13 de Maio','','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',55],['Centro de Humanidades - UECE',-3.7506302,-38.531948,'Rua Ministro Joaquim Bastos, em frente ao Centro de Humanidade / Esquina Rua Monsenhor Liberato','','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',56],['Rodoviária',-3.7577630,-38.531637,'Avenida Deputado Oswaldo Studart, 1630 (Terminal Rodoviário Engenheiro José Thomé) / Esquina Avenida Borges de Melo','','A','EO','9','9','5','Est_Normal 1','img/estacaook.png',57],['Contax Borges de Melo',-3.7577769,-38.533017,'Rua Moreira Gomes, em frente ao Prédio da OI – CONTAX / Esquina Avenida Borges de Melo','','A','EO','4','4','8','Est_Normal 1','img/estacaook.png',58],['Jornal O Povo',-3.7392470,-38.524557,'Avenida Aguanambi, 282 (Jornal O Povo) / Esquina Avenida Domingos Olímpio','','A','EO','10','10','2','Est_Normal 1','img/estacaook.png',59],['Salesiano Dom Bosco',-3.7394022,-38.521290,'Rua J da Penha, 984 / Esquina Rua Antônio Sales','','A','EO','3','3','9','Est_Normal 1','img/estacaook.png',60],['Anfiteatro Parque do Cocó',-3.7439627,-38.485670,'Avenida Padre Antônio Tomás, em frente ao Anfiteatro do Cocó / Esquina Rua Valdetário Mota','Parque do Cocó','A','EO','1','1','13','Est_Normal 1','img/estacaook.png',61],['Portugália',-3.7463129,-38.479954,'Rua Professor Otávio Lobo, oposto ao Portugália Shopping / Esquina Avenida Padre Antônio Tomás','','A','EO','1','1','11','Est_Normal 1','img/estacaook.png',62],['Júlio Azevedo',-3.7415488,-38.481387,'Rua Júlio Azevedo, em frente ao Mercadinhos São Luiz / Esquina Avenida Santos Dumont','','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',63],['Otávio Lobo',-3.7427628,-38.478428,'Avenida Santos Dumont, 6050 / Entre a Rua Professor Otávio Lobo e a Rua Batista de Oliveira','','A','EO','2','2','10','Est_Normal 1','img/estacaook.png',64],['Praça Martins Dourado',-3.7454786,-38.475818,'Rua Almeida Prado, no estacionamento da Praça Martins Dourado / Esquina Rua Doutor Gilberto Studart','','A','EO','1','1','13','Est_Normal 1','img/estacaook.png',65],['Francisco Matos',-3.7473295,-38.470344,'Rua Doutor Francisco Matos, em frente a Praça s/nome, próximo ao chafariz desativado / Esquina Rua Doutor Gilberto Studart','','A','EO','5','5','7','Est_Normal 1','img/estacaook.png',66],['Cidade 2000',-3.7493924,-38.471496,'Canteiro central da Avenida Central, próximo ao Mini Mix Presentes / Esquina Alameda das Beneditas','','A','EO','8','8','4','Est_Normal 1','img/estacaook.png',67],['Hospital Geral de Fortaleza',-3.7404568,-38.476476,'Rua André Dall´olio, em frente ao Hospital Geral de Fortaleza / Esquina Rua Professor Otávio Lobo','','A','EO','4','4','8','Est_Normal 1','img/estacaook.png',68],['Shopping RioMar',-3.7417049,-38.473321,'Rua Des. Lauro Nogueira, em frente ao Shopping Rio Mar / Oposto ao Coelce - Subestação Papicu','','A','EO','3','3','9','Est_Normal 1','img/estacaook.png',69],['Shopping Iguatemi',-3.7579316,-38.488334,'Avenida Coronel Miguel Dias, lateral do Shopping Ouro Verde / Esquina com a Avenida Washington Soares','','A','EO','6','6','15','Est_Normal 1','img/estacaook.png',70],['Coronel Linhares',-3.7467183,-38.497395,'Rua Coronel Linhares, lateral da Farmácia Extrafarma / Esquina Avenida Antônio Sales','','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',71],['Salinas',-3.7630906,-38.483122,'Avenida Washington Soares, no acesso a Passarela de Pedestres, oposto ao Centro de Eventos do Ceará / Esquina Rua Firmino Rocha Aguiar','','A','EO','2','2','10','Est_Normal 1','img/estacaook.png',72],['FIC Guararapes',-3.7640658,-38.486035,'Rua Eliseu Uchôa Beco, em frente à FIC / Entre a Rua Firmino Rocha Aguiar e a Rua Romeu Aldigueri','','A','EO','7','7','5','Est_Normal 1','img/estacaook.png',73],['Unifor',-3.7712492,-38.481941,'Canteiro Central da Avenida Washington Soares, próximo a UNIFOR / Esquina com a Avenida Doutor Valmir Ponte','','A','EO','3','3','18','Est_Normal 1','img/estacaook.png',74],['Santa Cecília',-3.7436466,-38.495549,'Rua Vicente Linhares, lateral Colégio Santa Cecília / Esquina com a Avenida Senador Virgílio Távora','','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',75],['Fórum',-3.7742715,-38.481848,'Canteiro central da Av. Washington Soares / Esquina Rua Otacílio Mota','','A','EO','2','2','12','Est_Normal 1','img/estacaook.png',76],['Liceu do Ceará',-3.7236534,-38.541337,'Avenida Filomeno Gomes, oposto ao número 100 (Padaria Pão da Praça) / Em frente a Praça Gustavo Barroso','','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',79],['SENAI Jacarecanga',-3.7260305,-38.540672,'Rua Padre Ibiapina, em frente ao SENAI / Esquina com a Rua Júlio Pinto','','A','EO','0','0','12','Est_Vazia -1','img/estacaocheia.png',80]];//]]>

      $(".sumir").hide();

      var dias_semana = new Array("Domingo", "Segunda-feira",
       "Terça-feira", "Quarta-feira", "Quinta-feira",
       "Sexta-feira", "Sábado");



      var estacoes = [];
      function update(){
        return $.ajax({
          url: "http://localhost/site-tcc/dados.php",
          method: "POST",
          data: {tipo: "estacoes"},
          dataType: 'json',
          success: function(data) {

            estacoes = [];

            for(var i in data) {
              
              estacoes.push({
                "nome_estacao": data[i].nome,
                "id_estacao": data[i].id,
                "lat": data[i].lat,
                "lng": data[i].lng
              });

            }
          }

        });

      }

      var coordenadas = [];      

      function getPoints() {
        return $.when(update()).done(function(){


          console.log(estacoes);
          
          for (var i = 0; i < estacoes.length; i++){

            coordenadas[i] = {location: new google.maps.LatLng(estacoes[i].lng,estacoes[i].lat)}
          }


        });
        
      }

      var teste2 = true;
      function seleciona(id, estacao){
        if (teste2 == true){
          $("#estacao").val(estacao);
          $("#id_estacao").val(id);
        }else{
          $("#estacao2").val(estacao);
          $("#id_estacao2").val(id);
        }
      }
      var porcentagem_vag = [];
      function get_dados2(id_estacao,hora,dia_semana){
        return $.ajax({
          url: "http://localhost/site-tcc/dados.php",
          method: "POST",
          data: {tipo: "porcentagem_vag", id_estacao: id_estacao, hora:hora, dia_semana: dia_semana},
          dataType: 'json',
          success: function(data) {
            console.log(data);
            porcentagem_vag = [];
          
            
          
            porcentagem_vag = data[0].total;
            
          },
          error: function(data) {
            console.log(data);
          }
        });
      }
      var porcentagem_hora = [];
      function get_dados(id_estacao,hora,dia_semana){
        return $.ajax({
          url: "http://localhost/site-tcc/dados.php",
          method: "POST",
          data: {tipo: "porcentagem_hora", id_estacao: id_estacao, hora:hora, dia_semana: dia_semana},
          dataType: 'json',
          success: function(data) {
            console.log(data);
            porcentagem_hora = [];
          
            
          
            porcentagem_hora = data[0].total;
            
            

          },
          error: function(data) {
            console.log(data);
          }
        });
      }

      $("#origem").click(function(){
        teste2=false;
        $("#origem").prop('disabled',true);
        $("#dia_semana").prop('disabled',true);
        $("#hora").prop('disabled',true);
        get_dados($("#id_estacao").val(),$("#hora").val(),$("#dia_semana").val());
        $(".sumir").show();
        $("#dia_semana2").val($("#dia_semana").val());
      });

      $("#destino").click(function(){
         $.when(get_dados2($("#id_estacao2").val(),$("#hora2").val(),$("#dia_semana2").val())).done(function(){
          console.log(porcentagem_hora+"teste");
          console.log(porcentagem_vag+"teste2");
          var resultado = (parseFloat(porcentagem_vag) * parseFloat(porcentagem_hora)) / 100
          console.log(resultado);
          resultado = parseFloat(resultado.toFixed(2));
          $("#resultado").empty();
          $("#resultado").append(resultado+"%");
          $("#origem").prop('disabled',false);
          $("#dia_semana").prop('disabled',false);
          $("#hora").prop('disabled',false);
          $(".sumir").hide();
          teste2=true;
         });
      });

      var map = [];
      var teste = false;
      window.initMap = function() {
        map = new google.maps.Map(document.getElementById('map2'), {
          zoom: 13,
          center: {lat: -3.7301388, lng: -38.496522}
        });
        var ultimo = [];
        $.when(getPoints()).done(function(){
          estacoes.forEach(function(estacao){
            var contentString = estacao.nome_estacao;

            var infowindow = new google.maps.InfoWindow({
              content: contentString
            });
            ultimo = infowindow;
            location2 = new google.maps.LatLng(estacao.lat,estacao.lng);

            var marker = new google.maps.Marker({
              position: location2,
              map: map,
              title: contentString
            });

            marker.addListener('click', function() {
              ultimo.close();
              infowindow.open(map, marker);
              ultimo = infowindow;
              seleciona(estacao.id_estacao,estacao.nome_estacao);
            });


          });
        });
      }
});          