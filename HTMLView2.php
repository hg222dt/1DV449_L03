<?php

/*
 * Klass för att visa den slutliga html-sidan för användaren
 *
 **/
class HTMLView2 {

	public function echoHTML($body) {

		if($body === null) {
			throw new Exception();
		}

		echo "
		<!DOCTYPE html>
		<html>
			<head>
				<style type='text/css'>
					html { height: 100% }
					body { height: 100%; margin: 0; padding: 0 }
				</style>
				<title>Trafik-siten!</title>
				<meta http-equiv='content-type' content='text/html; charset=utf-8'>
				<!-- <link rel='stylesheet' type='text/css' href='css/styles.css'> -->

			</head>
			<body>
				<div class='container' style='height:100%'>
					$body
				</div>
				<script src='js/TrafficInfoData.js'></script>
				<script src='js/TrafficInfoBoard.js'></script>

				</script>

			</body>
			</html>
		";
	}
}