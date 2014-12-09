<?php

	require_once("HTMLView.php");
	require_once("controller/TrafficController.php");


	session_start();


	$trafficController = new TrafficController();

	$htmlBody = $trafficController->doControll();


	if(!isset($_GET)) {

		$view = new HTMLView();
		$view->echoHTML($htmlBody);

	}