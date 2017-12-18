<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Bicicletar</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">

  <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  <link rel="stylesheet" type="text/css" href="css/style_mapa.css">
  <link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="js/jquery-3.2.1.min.js"></script>
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js" integrity="sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" integrity="sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ" crossorigin="anonymous"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <link rel="stylesheet" href="css/jquery-ui-timepicker-addon.css">
  <script type="text/javascript" src="js/jquery-ui-timepicker-addon.js"></script>
  
<script src="https://canvasjs.com/assets/script/canvasjs.min.js"></script>

</head>
<body>
<div class="container">
<?php include_once 'estacoes.php'; ?>
<div class="row">
<div class="col">
	<div id="conteudo">
		
	</div>
 </div>

</div>	


<script type="text/javascript" src="js/script.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.0/Chart.js"></script>
<script type="text/javascript" src="js/estacoes.js"></script>
<script async defer src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCSCMXRUzI0FTU7JLcyKERyNyh5158M1IY&callback=initMap"></script>
</div>
</body>
</html>