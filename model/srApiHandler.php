<?php


if($_GET['action'] == "getLatest") {

	$ret = curl_get_request("api.sr.se/api/v2/traffic/messages/?format=json");

    echo $ret;
}


function curl_get_request($url) {
        

        /*

        $urlArr = array();
        unset($urlArr);
        $urlArr = array();

        $dataArray = array();
        unset($dateArray);
        $dataArray = array();

        $countNumeric = false;

        if(!is_array($tempUrlArr)) {
        	array_push($urlArr, $tempUrlArr);
        	$countNumeric = true;
        } else {
        	$urlArr = $tempUrlArr;
        }

        */

//        foreach ($urlArr as $url) {

	        $ch = curl_init();

	    	$userAgent = "";

		    $options = array(
		        CURLOPT_RETURNTRANSFER => TRUE,  // Setting cURL's option to return the webpage data
		        CURLOPT_AUTOREFERER => TRUE, // Automatically set the referer where following 'location' HTTP headers
		        CURLOPT_USERAGENT => $userAgent,// Setting the useragent
		        CURLOPT_URL => $url, // Setting cURL's URL option with the $url variable passed into the function
		    );
		    
		    curl_setopt_array($ch, $options);

	        $data = curl_exec($ch);
	        curl_close($ch);
	        
	        /*
	        if($countNumeric) {
	        	$dataArray[0] = $data;
	    	} else {
	    		$dataArray[$url] = $data;
	    	}

//	    }

	    sizeof($dataArray);
*/

	    //var_dump($data);

	    return $data;
    }