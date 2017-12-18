$(document).ready(function(){

  var quantidade = [];
  var estacao = [];
  var estacaoid = [];
  function get_dados(){
  return $.ajax({
    url: "http://localhost/site-tcc/dados.php",
    method: "POST",
    data: {tipo: "maismenosina", ordem:"DESC"},
    dataType: 'json',
    success: function(data) {
        console.log(data);

        for(var i in data) {
            quantidade.push(data[i].total);
            estacao.push(data[i].nome);
            estacaoid.push(data[i].id_estacao);
        }

    },
    error: function(data) {
        console.log(data);
    }
});
}
var quantidade2 = [];
  var estacao2 = [];
  var estacaoid2 = [];
 function get_dados2(){
  return $.ajax({
    url: "http://localhost/site-tcc/dados.php",
    method: "POST",
    data: {tipo: "maismenosina", ordem:"ASC"},
    dataType: 'json',
    success: function(data) {
        console.log(data);

        for(var i in data) {
            quantidade2.push(data[i].total);
            estacao2.push(data[i].nome);
            estacaoid2.push(data[i].id_estacao);
        }

    },
    error: function(data) {
        console.log(data);
    }
});
}


//var c = $("#mycanvas");
//#var ctx = c.get(0).getContext("2d");
$.when(get_dados(),get_dados2()).done(function(){
$("#result").load("canvas.html",function(){
    var chartdata = {
    labels: estacao,
    datasets : [
    {
     label: "Estações Com Mais Inatividades",
     backgroundColor: "rgba(102, 102, 255,0.5)",
     fill: false,
     data: quantidade
 }
 ]
};

var ctx = document.getElementById("myChart").getContext('2d');

var myLineChart1 = new Chart(ctx, {
    type: 'bar',
    data: chartdata,
    options: {
            scales:{
              yAxes:[{
                scaleLabel:{
                  display: true,
                  labelString: 'Porcentagem'
                }
              }]
            }
          }
    });


var chartdata2 = {
    labels: estacao2,
    datasets : [
    {
     label: "Estações Com Menos Inatividades",
     backgroundColor: "rgba(102, 163, 255, 0.5)",
     data: quantidade2
 }
 ]
};

var ctx2 = document.getElementById("myChart2").getContext('2d');

var myLineChart2 = new Chart(ctx2, {
    type: 'bar',
    data: chartdata2,
    options: {
            scales:{
              yAxes:[{
                scaleLabel:{
                  display: true,
                  labelString: 'Porcentagem'
                }
              }]
            }
          }
    });

var estacoes = [];
      function update(estacao){
        return $.ajax({
          url: "http://localhost/site-tcc/dados.php",
          method: "POST",
          data: {tipo: "estacao", id_estacao: estacao},
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

      function getPoints(estacao) {
        return $.when(update(estacao)).done(function(){


          console.log(estacoes);
          
          for (var i = 0; i < estacoes.length; i++){

            coordenadas[i] = {location: new google.maps.LatLng(estacoes[i].lng,estacoes[i].lat)}
          }


        });
        
      }


$('#myChart').click(
            function(evt){
              var activePoints = myLineChart1.getElementsAtEvent(evt);
            var firstPoint = activePoints[0];
            var label = myLineChart1.data.labels[firstPoint._index];
            var value = myLineChart1.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];
            if (firstPoint !== undefined){
                var estacao = estacaoid[firstPoint._index]
                $("#exampleModal").modal("toggle");
                $.when(getPoints(estacao)).done(function(){
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

            markersgeral.push(marker);

            marker.addListener('click', function() {
              ultimo.close();
              infowindow.open(map, marker);
              ultimo = infowindow;
            
            });


          });
        });

              }
            });

$('#myChart2').click(
            function(evt){
              var activePoints = myLineChart2.getElementsAtEvent(evt);
            var firstPoint = activePoints[0];
            var label = myLineChart2.data.labels[firstPoint._index];
            var value = myLineChart2.data.datasets[firstPoint._datasetIndex].data[firstPoint._index];
            if (firstPoint !== undefined){
                var estacao = estacaoid2[firstPoint._index]
                $("#exampleModal").modal("toggle");
                $.when(getPoints(estacao)).done(function(){
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

            markersgeral.push(marker);

            marker.addListener('click', function() {
              ultimo.close();
              infowindow.open(map, marker);
              ultimo = infowindow;
            });


          });
        });

              }
            });
});
});
});
