<?php

require_once("./model/TrafficModel.php");

/*
 * Klass som hanterar sitens vy-relaterade data
 *
 **/

class TrafficView {

	public function showStartPage() {

		$ret = "

<h1>Trafik-info siten</h1>

<div id='meny'> 

	<div id='Alla kategorier'>
		<a href='#'>Alla kategorier</a>
	</div>
	<div  id='Vägtrafik'>
		<a href='#'>Vägtrafik</a>
	</div>
	<div id='Kollektivtrafik'>
		<a href='#'>Kollektivtrafik</a>
	</div>
	<div id='Planerad störning'>
		<a href='#'>Planerat störning</a>
	</div>
	<div id='Övrigt'>
		<a href='#'>Övrigt</a>
	</div>
	
</div>


<ul id='eventsList'>

</div>

<h4>Karta med trafikinfo från SR</h4> 

<div id='map-canvas' style='height:50%'></div>



		";

		return $ret;
	}
}