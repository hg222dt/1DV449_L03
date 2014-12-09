<?php

require_once("./View/TrafficView.php");
require_once("./Model/TrafficModel.php");

/*
 * Kontroller-klass
 *
 **/

class TrafficController {

	private $trafficView;
	private $trafficModel;

	public function __construct() {
		$this->trafficModel = new TrafficModel();
		$this->trafficView = new TrafficView($this->trafficModel);
	}

	public function doControll() {

		try {
			switch($this->trafficView->getUserAction()) {

				case ACTION_GET_TRAFFIC_DATA_ASYNC:
					echo $this->trafficModel->getTrafficDataAsync();
					break;

				default:
					return $this->trafficView->showStartPage();
					break;
			}	
		} catch (Exception $e) {
			return SiteView::MESSAGE_ERROR_FATAL;
		}
	}
}