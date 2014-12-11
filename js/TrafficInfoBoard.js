"use strict";

var TRIN = TRIN || {};

	TRIN.currentInfoWindow = null;

	TRIN.initialize = function() {

		TRIN.createMap();

		TRIN.getTrafficsData();
	
	}


	TRIN.createMap = function() {

		var myLatlng = new google.maps.LatLng(62.88722932,17.91876062);

	    var mapOptions = {
	      center: myLatlng,
	      zoom: 5
	    };

		TRIN.map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
	}

	TRIN.prepareDataForPage = function() {

		TRIN.addMarkers();



	}


	TRIN.addMarkers = function() {


		for(var itemNumber in TRIN.trafficItems) {


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
								      '<h1 id="firstHeading" class="firstHeading">' + currentItem.title + '</h1>'+
								      '<div id="bodyContent">'+
								      '<p>' + currentItem.description + '</p>'+
								      '</div>'+
							      '</div>';

			attachInfoWindow(marker, contentString);
		
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