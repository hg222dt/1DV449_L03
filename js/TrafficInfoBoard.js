"use strict";

var TRIN = TRIN || {};


	TRIN.initialize = function() {

			var myLatlng = new google.maps.LatLng(62.88722932,17.91876062);

		    var mapOptions = {
		      center: myLatlng,
		      zoom: 5
		    };

		    TRIN.map = new google.maps.Map(document.getElementById('map-canvas'),
		        mapOptions);


			var trafficInfoItems = TRIN.getTrafficsData();

		    //TRIN.addMarker(map, myLatlng);

	}


	TRIN.addMarkers = function() {

		console.log(TRIN.trafficItems[0].description);

		for(var itemNumber in TRIN.trafficItems) {

			var currentItem = TRIN.trafficItems[itemNumber];


			var myLatlng = new google.maps.LatLng(currentItem.latitude,currentItem.longitude);


			var contentString = '<div id="content">'+
								      '<div id="siteNotice">'+
								      '</div>'+
								      '<h1 id="firstHeading" class="firstHeading">Testruta</h1>'+
								      '<div id="bodyContent">'+
								      '<p>En testruta</p>'+
								      '</div>'+
							      '</div>';

			  var infowindow = new google.maps.InfoWindow({
			      content: contentString
			  });

			var marker = new google.maps.Marker({
			    position: myLatlng,
			    map: TRIN.map,
			    title:'Hello World!',
				draggable:true,
			    animation: google.maps.Animation.DROP
			});
			
			google.maps.event.addListener(marker, 'click', function() {
				infowindow.open(TRIN.map,marker);
			});

			google.maps.event.addListener(marker, 'click', TRIN.toggleBounce); 
		}
	}

	TRIN.toggleBounce = function() {

	  if (marker.getAnimation() != null) {
	    marker.setAnimation(null);
	  } else {
	    marker.setAnimation(google.maps.Animation.BOUNCE);
	  }

	}

window.onload = TRIN.initialize;