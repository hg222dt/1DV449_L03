<?php

require_once("./model/TrafficModel.php");

/*
 * Klass som hanterar sitens vy-relaterade data
 *
 **/

class TrafficView {
/*
	//Konstanter för användar-actions
	const ACTION_GET_TRAFFIC_DATA_ASYNC = "getTrafficDataAsync";


	private $trafficModel;
	private $pageMessage;


	public function __construct($trafficModel) {
		$this->trafficModel = $trafficModel;
	}


	public function getUserAction() {

		//Hämtar ut vilken användar-action som valts
		switch(key($_GET)) {

			case TrafficView::ACTION_GET_TRAFFIC_DATA_ASYNC:
				return TrafficView::ACTION_GET_TRAFFIC_DATA_ASYNC;
				break;

		}
	}
*/


	public function showStartPage() {

		$ret = "

<h1>Trafik-info siten</h1>

<ul>
	<li>Här kommer alla trafikinfo att visas.</li>
</ul>

<h4>Karta med trafikinfo från SR</h4> 

<div id='map-canvas' style='height:50%'></div>



		";

		return $ret;
	}
}