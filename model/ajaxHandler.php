<?php

require_once("srApiHandler.php");

$srApiHandler = new SrApiHandler();

if($_GET['action'] == "getLatest") {

	echo $srApiHandler->useCacheOrNewCall();
}