<?php

/*
 * Klass för att visa den slutliga html-sidan för användaren
 *
 **/
class HTMLView {

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
				<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css'>
				<link rel='stylesheet' type='text/css' href='css/styles.css'>

			</head>
			<body>
				<div class='container' style='height:100%'>
					$body
				</div>
				<script src='//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>
                <script src='//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/js/bootstrap.min.js'></script>
				<script src='js/TrafficInfoData.js'></script>
				<script src='js/TrafficInfoBoard.js'></script>

                <script type='text/javascript'src='https://maps.googleapis.com/maps/api/js?key=AIzaSyC9HmJK7saacxO515M74v21H5PaDHXTNQQ'>
				</script>

			</body>
			</html>
		";
	}
}