"use strict";

var TRIN = TRIN || {};


TRIN.onlineMode = true;

TRIN.currentInfoWindow = null;
TRIN.activeMarkers = [];

TRIN.constants = {
	CATEGORY_ALL_CATEGORIES: "Alla kategorier",
	CATEGORY_ROAD_TRAFFIC: "Vägtrafik",
	CATEGORY_PUBLIC_TRANSPORT: "Kollektivtrafik",
	CATEGORY_PLANNED_INTERUPTION: "Planerad störning",
	CATEGORY_OTHERS_CATEGORY: "Övrigt"
}


TRIN.initialize = function() {

	TRIN.createMap();

	TRIN.getTrafficsData();

	TRIN.assignButtons();

}

TRIN.assignButtons = function() {

	var allCategoriesButton = document.getElementById(TRIN.constants.CATEGORY_ALL_CATEGORIES);

	allCategoriesButton.onclick = function () {
		TRIN.setCategoryToUI(TRIN.constants.CATEGORY_ALL_CATEGORIES);
	};

	var roadTrafficButton = document.getElementById(TRIN.constants.CATEGORY_ROAD_TRAFFIC);

	roadTrafficButton.onclick = function () {
		TRIN.setCategoryToUI(TRIN.constants.CATEGORY_ROAD_TRAFFIC);
	};

	var publicTransportButton = document.getElementById(TRIN.constants.CATEGORY_PUBLIC_TRANSPORT);

	publicTransportButton.onclick = function () {
		TRIN.setCategoryToUI(TRIN.constants.CATEGORY_PUBLIC_TRANSPORT);
	};

	var plannedInteruptionButton = document.getElementById(TRIN.constants.CATEGORY_PLANNED_INTERUPTION);

	plannedInteruptionButton.onclick = function () {
		TRIN.setCategoryToUI(TRIN.constants.CATEGORY_PLANNED_INTERUPTION);
	};

	var othersButton = document.getElementById(TRIN.constants.CATEGORY_OTHERS_CATEGORY);

	othersButton.onclick = function () {
		TRIN.setCategoryToUI(TRIN.constants.CATEGORY_OTHERS_CATEGORY);
	};
}

TRIN.setCategoryToUI = function(category) {

	var itemsInCategory = TRIN.getItemsInCategory(category);

	TRIN.addMarkers(itemsInCategory);

	TRIN.addDataToList(itemsInCategory);

}

TRIN.deleteMarkersFromMap = function () {

	for(var marker in TRIN.activeMarkers) {
		TRIN.activeMarkers[marker].setMap(null);
	}
}


TRIN.createMap = function() {

	var myLatlng = new google.maps.LatLng(62.88722932,17.91876062);

    var mapOptions = {
      center: myLatlng,
      zoom: 4
    };

	TRIN.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}


TRIN.addMarkers = function(itemsInCategory) {

	if(TRIN.activeMarkers.length > 0) {
		TRIN.deleteMarkersFromMap();
	}

	for(var itemNumber in itemsInCategory) {

		var currentItem = TRIN.trafficItems[itemNumber];

		var myLatlng = new google.maps.LatLng(currentItem.latitude,currentItem.longitude);

		
		var marker = new google.maps.Marker({
		    position: myLatlng,
		    map: TRIN.map,
		    title:'Hello World!',
			draggable:true,
		    //animation: google.maps.Animation.DROP
		});
		
		
		var contentString = '<div id="content">'+
							      '<div id="siteNotice">'+
							      '</div>'+
							      '<p>' + currentItem.createddate + " |  Katergori: " + currentItem.subcategory + '</p>' +
							      '<h1 id="firstHeading" class="firstHeading">' + currentItem.title + '</h1>'+
							      '<div id="bodyContent">'+
							      '<p>' + currentItem.description + '</p>'+
							      '</div>'+
						      '</div>';

		var infowindow = TRIN.attachInfoWindow(marker, contentString);
		
		currentItem.marker = marker;
		currentItem.infowindow = infowindow;

		TRIN.activeMarkers.push(marker);
	}

}

TRIN.attachInfoWindow = function (marker, contentString) {
  
	var infowindow = new google.maps.InfoWindow({
		content: contentString
	});

	google.maps.event.addListener(marker, 'click', function() {
		if(TRIN.currentInfoWindow != null) {
			TRIN.currentInfoWindow.close();
		}
		
		infowindow.open(marker.get('map'), marker);
		TRIN.currentInfoWindow = infowindow;
	});

	return infowindow;
}

TRIN.addDataToList = function(itemsInCategory) {

	 var eventsList = document.getElementById("eventsList");

	 eventsList.innerHTML = '';	 

	 for(var itemNumber in itemsInCategory) {

	 	var item = itemsInCategory[itemNumber];

	 	var newEventListElement = document.createElement("div");

		var eventDescription = document.createTextNode(item.title);

		newEventListElement.appendChild(eventDescription);

		TRIN.setOpenInfowindowEvent(newEventListElement, item);

		eventsList.appendChild(newEventListElement);

	 }
}


TRIN.setOpenInfowindowEvent = function (element, item) {

	element.onclick = function(e) {

		if(TRIN.currentInfoWindow != null) {
			TRIN.currentInfoWindow.close();
		}

		item.infowindow.open(item.marker.get('map'), item.marker);
		TRIN.currentInfoWindow = item.infowindow;

	}
}



TRIN.getItemsInCategory = function(category) {

	var itemsInCategory = [];

	var categoryInNumber;
	
	switch(category)
	{
		case TRIN.constants.CATEGORY_ALL_CATEGORIES:
			categoryInNumber = 4;
			break;

		case TRIN.constants.CATEGORY_ROAD_TRAFFIC:
			categoryInNumber = 0;
			break;

		case TRIN.constants.CATEGORY_PUBLIC_TRANSPORT:
			categoryInNumber = 1;
			break;

		case TRIN.constants.CATEGORY_PLANNED_INTERUPTION:
			categoryInNumber = 2;
			break;

		case TRIN.constants.CATEGORY_OTHERS_CATEGORY:
			categoryInNumber = 3;
			break;

	}

	if(category == TRIN.constants.CATEGORY_ALL_CATEGORIES) {
		itemsInCategory = TRIN.trafficItems;
	} else {

		for(var itemNumber in TRIN.trafficItems) {
			var currentItem = TRIN.trafficItems[itemNumber];

			if(categoryInNumber == currentItem.category) {
				itemsInCategory.push(currentItem);
			}
		}
	}

	return itemsInCategory;
}

/*
TRIN.toggleBounce = function(marker) {

  if (marker.getAnimation() != null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }

}
*/


window.onload = TRIN.initialize;