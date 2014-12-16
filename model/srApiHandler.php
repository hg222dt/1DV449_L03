<?php


class SrApiHandler {

	private $useCacheAuto;
	private $maxAmountOfResults;
	private $url;
	private $filename;
	private $cacheTimeInMinutes;
	private $tryCache = false;

	public function __construct() {
		$this->useCacheAuto = false;
		$this->maxAmountOfResults = 100;
		$this->url = "http://api.sr.se/api/v2/traffic/messages?format=json&pagination=false&size=" . $this->maxAmountOfResults;
		$this->filename = "jsonFile.txt";
		$this->cacheTimeInMinutes = 15;
	}


	public function useCacheOrNewCall() {

		$jsonFile = file_get_contents($this->filename);

		if($this->tryCache) {
			if(!empty($jsonFile)) {

				$decodedJson = json_decode($jsonFile);
				$timestamp = $decodedJson->timestamp;
				$cacheTime = date('Y/m/d H:i:s', strtotime('- ' . $this->cacheTimeInMinutes . ' minutes'));

				if($cacheTime < $timestamp && $this->useCacheAuto == false) {
					return $this->curl_get_request($this->url);
				} else {
					return $decodedJson->retrievedData;
				}
			}
		} else {

			$ret = $this->curl_get_request($this->url);

			$ret = json_decode($ret, true);

			$messages = $ret['messages'];

			$reversed = array_reverse($messages);

			$trimmedMessages = array();

			for ($i=0; $i < $this->maxAmountOfResults; $i++) { 
				$trimmedMessages[$i] = $reversed[$i];
			}


			$jsonData = array(
        		'timestamp' => date('Y/m/d H:i:s'),
        		'retrievedData' => $trimmedMessages
        	);

        	$jsonData = json_encode($jsonData, JSON_PRETTY_PRINT);

	   		file_put_contents($this->filename, $jsonData);

			return $jsonData;
		}
	}

	private function curl_get_request($url) {

        $ch = curl_init();

    	$userAgent = "";

	    $options = array(
			CURLOPT_HTTPHEADER => array('Accept' => 'application/json; charset=utf-8'),
	        CURLOPT_RETURNTRANSFER => TRUE,
	        CURLOPT_AUTOREFERER => TRUE,
	        CURLOPT_USERAGENT => $userAgent,
	        CURLOPT_URL => $url,
	    );
	    
	    curl_setopt_array($ch, $options);

        $data = curl_exec($ch);

        curl_close($ch);

	    return $data;
    }

}