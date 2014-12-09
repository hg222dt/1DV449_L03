<?php

require_once("./Model/TrafficModel.php");

/*
 * Klass som hanterar sitens vy-relaterade data
 *
 **/

class TrafficView {

	//Konstanter för användar-actions
	const ACTION_GET_TRAFFIC_DATA_ASYNC = "getTrafficDataAsync";


	private $trafficModel;
	private $pageMessage;


	public function __construct($trafficModel) {
		$this->trafficModel = $trafficModel;
	}


	public function getUserAction() {

		//Hämtar ut vilken användar-action som valts
		switch(key($_GET['action'])) {

			case SiteView::ACTION_GET_TRAFFIC_DATA_ASYNC:
				return SiteView::ACTION_GET_TRAFFIC_DATA_ASYNC;
				break;

		}
	}



	public function showStartPage() {

		$ret = "
<h1>Trafik-info siten</h1>

<!-- Google maps karta -->
<h4>Här kommer kartan att visas.</h4>

<ul>
	<!-- items för trafikinfo -->
	<h4>Här kommer alla trafikinfo att visas.</h4>
</ul>
		";

		return $ret;
	}
