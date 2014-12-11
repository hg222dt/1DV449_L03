"use strict";

var TRIN = TRIN || {};



TRIN.getTrafficsData = function() {

	var trafficItemList = TRIN.getTrafficsDataAjax();

}


TRIN.getTrafficsDataAjax = function() {

//Hämta data från sveriges radios api
//Lägg varje trafikinfo i vars ett TrafficInfoItem-objekt
//Lägg alla objekt i lista.

	var trafficItemList = [];

    $.ajax({

		type: "GET",
		url: "model/srApiHandler.php",
		data: { "action": "getLatest"}
		}).done(function(data) {


			var jsonData = JSON.parse(data);

			//console.log(jsonData);

			for(var message in jsonData.messages) {
				
				//console.log(jsonData.messages);
				
				trafficItemList.push(new trafficInfoItem(	
											jsonData.messages[message].category,
											jsonData.messages[message].createddate,
											jsonData.messages[message].description,
											jsonData.messages[message].exactlocation,
											jsonData.messages[message].id,
											jsonData.messages[message].latitude,
											jsonData.messages[message].longitude,
											jsonData.messages[message].priority,
											jsonData.messages[message].subcategory,
											jsonData.messages[message].title
										));

			}


			TRIN.trafficItems = trafficItemList;

			TRIN.prepareDataForPage();

		}).fail(function (jqXHR, textStatus) {

			console.log("Faail: " + textStatus);

		});
}


function trafficInfoItem(category, createddate, description, exactlocation, id, latitude, longitude, priority, subcategory, title) {
	this.category = category;
	this.createddate = createddate;
	this.description = description;
	this.exactlocation = exactlocation;
	this.id = id;
	this.latitude = latitude;
	this.longitude = longitude;
	this.priority = priority;
	this.subcategory = subcategory;
	this.title = title;
}

