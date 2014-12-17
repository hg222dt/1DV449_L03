<?php

require_once("./view/TrafficView.php");
require_once("./model/TrafficModel.php");

/*
 * Kontroller-klass
 *
 **/

class TrafficController {

	private $trafficView;
	//private $trafficModel;

	public function __construct() {

		$this->trafficView = new TrafficView($this->trafficModel);
	}

	public function doControll() {

		return $this->trafficView->showStartPage();

	}
}