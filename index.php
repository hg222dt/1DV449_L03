<?php

	require_once("HTMLView.php");
	require_once("controller/TrafficController.php");


	session_start();


	$trafficController = new TrafficController();

	$htmlBody = $trafficController->doControll();

	$view = new HTMLView();
	$view->echoHTML($htmlBody);