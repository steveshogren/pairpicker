function generatePairs() {
	var peeps = document.getElementsByClassName("names");
	var names = [];
	
	var paircount = 0;
	for(i = 0; i < peeps.length; i++){
		if(peeps[i].checked)			
			names.push(peeps[i].value);
	}	
	var shuffledPairs = shuffle(names);
	var element = document.getElementById("shuffledPairs");
	
	var splitArray = splitarray(shuffledPairs, 2);
	element.innerHTML = "";
	for(i=0; i< splitArray.length; i++){
		var listItem = document.createElement("li");
		listItem.innerHTML = splitArray[i];
		element.appendChild(listItem);
	}
	
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function splitarray(input, spacing)
{
    var output = [];

    for (var i = 0; i < input.length; i += spacing)
    {
        output[output.length] = input.slice(i, i + spacing);
    }

    return output;
}
