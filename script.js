$( document ).ready( function () {

	var colors = ["red","blue", "orange"];

	var counter = 0;

	$("#square").click( function(){
		console.log('HERE')

		currColor = colors[counter];

		if(counter < colors.length){
			counter++;
		}else{
			counter = 0;
		}

		$(this).css({"background-color":currColor});
		//$(this).css({"background-color":"orange"});
		

	});

});