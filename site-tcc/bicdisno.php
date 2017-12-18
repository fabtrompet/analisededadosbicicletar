<a href="#inicio" class="btn btn-secondary">Voltar</a>
<h4>10 - Qual a probabilidade de uma estação não ter bicicleta em um determinado dia/horário?</h4>
<p>Clique em uma estação para selecionar e depois em consultar.</p>
<div id="map2"></div>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCSCMXRUzI0FTU7JLcyKERyNyh5158M1IY&libraries=visualization&callback=initMap" async defer>
    </script>

<script type="text/javascript" src="js/script_mapa11.js"></script>
<div class="mt-2">
<div class="form-group row"> 
    <label for="dia_semana" class="col-sm-3 col-form-label">Escolha o dia da semana</label>
    <label class="col-sm-3">
    <select name="dia_semana" class="form-control" id="dia_semana">
      <option value="0">Domingo</option>
      <option value="1">Segunda</option>
      <option value="2">Terça</option>
      <option value="3">Quarta</option>
      <option value="4">Quinta</option>
      <option value="5">Sexta</option>
      <option value="6">Sábado</option>
    </select>
    </label>
 </div>
 <div class="form-group row"> 
    <label for="hora" class="col-sm-3 col-form-label">Selecione a hora</label>
    <label class="col-sm-3">
    <select name="hora" class="form-control" id="hora">
    	<option value="00">00</option>
	    <option value="01">01</option>
	    <option value="02">02</option>
	    <option value="03">03</option>
	    <option value="04">04</option>
	    <option value="05">05</option>
	    <option value="06">06</option>
	    <option value="07">07</option>
	    <option value="08">08</option>
	    <option value="09">09</option>
	    <option value="10">10</option>
		<option value="11">11</option>
		<option value="12">12</option>
		<option value="13">13</option>
		<option value="14">14</option>
		<option value="15">15</option>
		<option value="16">16</option>
		<option value="17">17</option>
		<option value="18">18</option>
		<option value="19">19</option>
		<option value="20">20</option>
		<option value="21">21</option>
		<option value="22">22</option>
		<option value="23">23</option>
    </select>
    </label>
 </div>
 <div class="form-group row"> 
    <input type="hidden" id="id_estacao" name="">
    <label for="estacao" class="col-sm-3 col-form-label">Estação</label>
    <label class="col-sm-3">
    	<input type="text" name="" disabled id="estacao" class="form-control">
    </label>
 </div>
 <label class="col-sm-6 col-form-label">
 <button id="origem" class="btn btn-primary">Consultar</button>
 </label>
</div>
<div id="chartdiv" class="mx-auto" ></div>
