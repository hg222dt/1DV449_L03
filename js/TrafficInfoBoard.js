"use strict";

var TRIN = TRIN || {};

	TRIN.currentInfoWindow = null;

	TRIN.CATEGORY_ALL_CATEGORIES = "Alla kategorier";
	TRIN.CATEGORY_ROAD_TRAFFIC = "Vägtrafik";
	TRIN.CATEGORY_PUBLIC_TRANSPORT = "Kollektivtrafik";
	TRIN.CATEGORY_PLANNED_INTERUPTION = "Planerad störning";
	TRIN.CATEGORY_OTHERS_CATEGORY = "Övrigt";

	TRIN.activeMarkers = [];


	TRIN.initialize = function() {

		

		TRIN.createMap();

		TRIN.getTrafficsData();

		TRIN.assignButtons();
	
	}

	TRIN.assignButtons = function() {

   		var allCategoriesButton = document.getElementById(TRIN.CATEGORY_ALL_CATEGORIES);
    
    	allCategoriesButton.onclick = function () {
    		TRIN.setCategoryToUI(TRIN.CATEGORY_ALL_CATEGORIES);
    	};

    	var roadTrafficButton = document.getElementById(TRIN.CATEGORY_ROAD_TRAFFIC);
    
    	roadTrafficButton.onclick = function () {
    		TRIN.setCategoryToUI(TRIN.CATEGORY_ROAD_TRAFFIC);
    	};

    	var publicTransportButton = document.getElementById(TRIN.CATEGORY_PUBLIC_TRANSPORT);
    
    	publicTransportButton.onclick = function () {
    		TRIN.setCategoryToUI(TRIN.CATEGORY_PUBLIC_TRANSPORT);
    	};

    	var plannedInteruptionButton = document.getElementById(TRIN.CATEGORY_PLANNED_INTERUPTION);
    
    	plannedInteruptionButton.onclick = function () {
    		TRIN.setCategoryToUI(TRIN.CATEGORY_PLANNED_INTERUPTION);
    	};

    	var othersButton = document.getElementById(TRIN.CATEGORY_OTHERS_CATEGORY);
    
    	othersButton.onclick = function () {
    		TRIN.setCategoryToUI(TRIN.CATEGORY_OTHERS_CATEGORY);
    	};

	
	}

	TRIN.setCategoryToUI = function(category) {

		if(TRIN.activeMarkers.length > 0) {
			TRIN.deleteMarkersFromMap();
		}

		TRIN.prepareDataForPage(category);
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

	TRIN.prepareDataForPage = function(category) {

		TRIN.addMarkers(category);

		TRIN.addDataToList(category);

	}


	TRIN.addMarkers = function(category) {

		var categoryInNumber;
		
		switch(category)
		{
			case TRIN.CATEGORY_ALL_CATEGORIES:
				categoryInNumber = 4;
				break;

			case TRIN.CATEGORY_ROAD_TRAFFIC:
				categoryInNumber = 0;
				break;

			case TRIN.CATEGORY_PUBLIC_TRANSPORT:
				categoryInNumber = 1;
				break;

			case TRIN.CATEGORY_PLANNED_INTERUPTION:
				categoryInNumber = 2;
				break;

			case TRIN.CATEGORY_OTHERS_CATEGORY:
				categoryInNumber = 3;
				break;

		}

		var itemsInCategory = [];

		if(category == TRIN.CATEGORY_ALL_CATEGORIES) {
			itemsInCategory = TRIN.trafficItems;
		} else {

			for(var itemNumber in TRIN.trafficItems) {
				var currentItem = TRIN.trafficItems[itemNumber];

				if(categoryInNumber == currentItem.category) {
					itemsInCategory.push(currentItem);
				}
			}
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

			attachInfoWindow(marker, contentString);
		
			TRIN.activeMarkers.push(marker);
		}

	}

	function attachInfoWindow(marker, contentString) {
	  
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
	}

	TRIN.addDataToList = function() {



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