$("#exampleModal").on("shown.bs.modal", function () {
    google.maps.event.trigger(map, "resize");
});
var markersgeral = []; 

      window.initMap = function() {
        map = new google.maps.Map(document.getElementById('estacoes'), {
          zoom: 13,
          center: {lat: -3.7301388, lng: -38.496522}
        });
        
      }

function setMapOnAll(map) {
  for (var i = 0; i < markersgeral.length; i++) {
    markersgeral[i].setMap(map);
}
}

$("#limpar").click(function(){
  setMapOnAll(null);
});      
