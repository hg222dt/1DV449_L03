var TrafficInfoBoard = {

	trafficItems: [],
	
	init:function(e) {


		TrafficInfoBoard.getTrafficInfo();
	},

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

window.onload = TrafficInfoBoard.init;