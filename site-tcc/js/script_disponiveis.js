$(document).ready(function(){

  $("#encontra").click(function(){
   
  var hora = $("#hora").val();
  var dia_semana = $("#dia_semana").val();
  var quantidade = [];
  var estacao = [];
  var estacaoid = [];
  function get_dados(){
  return $.ajax({
    url: "http://localhost/site-tcc/dados.php",
    method: "POST",
    data: {tipo: "bicdisponiveis", dia_semana: dia_semana, hora:hora},
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



//var c = $("#mycanvas");
//#var ctx = c.get(0).getContext("2d");
$.when(get_dados()).done(function(){
$("#result").load("canvas.html",function(){
  console.log(estacao);
  console.log(quantidade);
    var chartdata = {
    labels: estacao,
    datasets : [
    {
     label: "Estações Mais Utilizadas",
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
          scales: {
              yAxes: [{
                  ticks: {
                      max: 100,
                      min: 0,
                      display: true
                  },
                  scaleLabel:{
                  display: true,
                  labelString: 'porcentagem'
                }
              }],
               xAxes: [{
                    gridLines: {
                    display:false
                }

                }]
          },
          tooltips: {
            enabled: true
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
            console.log("fakb");
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


});



});

});

});
