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
		url: "model/ajaxHandler.php",
		data: { "action": "getLatest"},
		dataType : "json"
		}).done(function(data) {
			
			console.log(data);

			var messages = data['retrievedData'];

			for(var message in messages) {

				trafficItemList.push(new trafficInfoItem(	
											messages[message].category,
											messages[message].createddate,
											messages[message].description,
											messages[message].exactlocation,
											messages[message].id,
											messages[message].latitude,
											messages[message].longitude,
											messages[message].priority,
											messages[message].subcategory,
											messages[message].title
										));

			}

			TRIN.trafficItems = trafficItemList;

			TRIN.setCategoryToUI(TRIN.constants.CATEGORY_ALL_CATEGORIES);

		}).fail(function (jqXHR, textStatus) {
			console.log("Faail: " + textStatus);
		});
}


function trafficInfoItem(category, createddate, description, exactlocation, id, latitude, longitude, priority, subcategory, title) {

	var firstSplit = createddate.split('+')[0];
	var secondSplit = firstSplit.split('(')[1];
	var date = new Date();

	date.setTime(secondSplit);

	this.category = category;
	this.createddate = date;
	this.description = description;
	this.exactlocation = exactlocation;
	this.id = id;
	this.latitude = latitude;
	this.longitude = longitude;
	this.priority = priority;
	this.subcategory = subcategory;
	this.title = title;
	this.marker = null;
	this.infowindow = null;
}

