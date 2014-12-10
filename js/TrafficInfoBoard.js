function init() {
  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var mapOptions = {
    zoom: 4,
    center: myLatlng
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Uluru (Ayers Rock)'
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
}

google.maps.event.addDomListener(window, 'load', initialize);



/*
var TrafficInfoBoard = {

	trafficItems: [],



      init:function(e) {

      	google.maps.event.addDomListener(window, 'load', initialize);

      },

      initialize:function() {

      	var myLatlng = new google.maps.LatLng(62.88722932,17.91876062);

        var mapOptions = {
          center: myLatlng,
          zoom: 5
        };

        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

		var contentString = '<div id="content">'+
						      '<div id="siteNotice">'+
						      '</div>'+
						      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
						      '<div id="bodyContent">'+
						      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
						      'sandstone rock formation in the southern part of the '+
						      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
						      'south west of the nearest large town, Alice Springs; 450&#160;km '+
						      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
						      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
						      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
						      'Aboriginal people of the area. It has many springs, waterholes, '+
						      'rock caves and ancient paintings. Uluru is listed as a World '+
						      'Heritage Site.</p>'+
						      '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
						      'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
						      '(last visited June 22, 2009).</p>'+
						      '</div>'+
						      '</div>';

		  var infowindow = new google.maps.InfoWindow({
		      content: contentString
		  });

		var marker = new google.maps.Marker({
		    position: myLatlng,
		    map: map,
		    title:'Hello World!',
			draggable:true,
		    animation: google.maps.Animation.DROP
		});
		
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		});

		google.maps.event.addListener(marker, 'click', toggleBounce);

      }

      function toggleBounce() {

		  if (marker.getAnimation() != null) {
		    marker.setAnimation(null);
		  } else {
		    marker.setAnimation(google.maps.Animation.BOUNCE);
		  }
		}




    google.maps.event.addDomListener(window, 'load', initialize);


	

	getTrafficInfo:function()
	{
		//ajax request to server and api
		//Gets data as json

		$.ajax({
			type: "GET",
			url: "index.php",
			data: {action: "getTrafficDataAsync"}
		}).done(function(data) { 

			data = JSON.parse(data);
		
			
			for(var item in data) {

				var obj = data[item];

			//    var text = obj.name +" said:\n" +obj.message;

                var item = new TrafficInfoItem(obj);
                var clientItemID = TrafficInfoBoard.trafficItems.push(item)-1;
                item.setClientID(clientItemID);

                var dbMessageId = obj.serial;

                //Spara item i speciell lista
                TrafficInfoBoard.saveItemToList(item);

			}

			TrafficInfoBoard.renderAllInfoItems(TrafficInfo.trafficItems);

//			document.getElementById("nrOfMessages").innerHTML = MessageBoard.messages.length;
			
		});
	},

	saveItemToList:function(item) 
	{

		//Saves specicific item to ItemList trafficItems


	},

	renderAllInfoItems:function()
	{
		//Renders all items in renderAllInfoItemstrafficItems to html and puts them in to DOM
	}


}

*/
window.onload = TrafficInfoBoard.init;