<?php

	require_once("HTMLView.php");
	require_once("Controller/SiteController.php");


	session_start();


	$siteController = new SiteController();

	$htmlBody = $siteController->doControll();


	if($_GET['action'] != "getTrafficDataAsync") {

		$view = new HTMLView();
		$view->echoHTML($htmlBody);

	}