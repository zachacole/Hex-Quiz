var boxOne = $(".boxOne");
var boxTwo = $(".boxTwo");
var progress = $(".progress-bar");
var trueOrFalse = "";
var counter = 0;
var score = 0;
var width = 0;
var timeoutID;

function chooseTrueOrFalse() {
	trueOrFalse = Math.floor(Math.random() * 2);
	return trueOrFalse;
}

function playGame() {
	counter++;
	$(".progress-ticker").text("Q: " + counter + "/10");
	if(counter < 11) {
		$(".hextext").css("border", "8px solid #000");

		var trueHexcode = "#";
		var fakeHexcode = "#";
		var characters = "0123456789ABCDEF";

		for( var i=0; i<6; i++ ) {
			trueHexcode += characters.charAt(Math.floor(Math.random() * characters.length));
		}
		for( var i=0; i<6; i++ ) {
			fakeHexcode += characters.charAt(Math.floor(Math.random() * characters.length));
		}

		chooseTrueOrFalse();

		if(trueOrFalse === 0) {
			boxOne.css("background-color", trueHexcode);
			boxTwo.css("background-color", fakeHexcode);
			} else {
			boxOne.css("background-color", fakeHexcode);
			boxTwo.css("background-color", trueHexcode);
		}

		$(".hextext-p").text(trueHexcode);
		$(".hextext-p").css("color", "#000");

		width += 10;
		progress.css("width", width + "%");
	} else {
		var trueHexcode = "#";
		var characters = "0123456789ABCDEF";

		for( var i=0; i<6; i++ ) {
			trueHexcode += characters.charAt(Math.floor(Math.random() * characters.length));
		}

		$(".box-wrapper").hide();
		$(".results-container").show();
		$(".results-container").css("background-color", trueHexcode);

		if(score < 3) {
			$(".results-wrapper").text("The only way to go is up. You scored " + score + "/10.");
		} if (3 <= score < 6) {
			$(".results").text("Not too bad. You scored " + score + "/10.");
		} else if (6 <= score < 8) {
			$(".results").text("Impressive. You scored " + score + "/10.");
		} else if (8 <= score < 10) {
			$(".results").text("Look at you, champ! You scored " + score + "/10.");
		} else {
			$(".results").text("Whoa, a perfect score! You scored " + score + "/10.");
		}
	}

}

function delayedGame() {
	timeoutID = window.setTimeout(playGame, 1200);
}

playGame();

boxOne.click(function() {
	if(trueOrFalse === 0) {
		score++;
		$(".hextext").css("border", "8px solid #77ECAE");
		$(".hextext-p").text("CORRECT");
		$(".hextext-p").css("color", "#77ECAE");
	} else {
		$(".hextext").css("border", "8px solid #EE5D5D");
		$(".hextext-p").text("INCORRECT");
		$(".hextext-p").css("color", "#EE5D5D");
	}
	delayedGame();
});

boxTwo.click(function() {
	if(trueOrFalse === 1) {
		score++;
		$(".hextext").css("border", "8px solid #77ECAE");
		$(".hextext-p").text("CORRECT");
		$(".hextext-p").css("color", "#77ECAE");
	} else {
		$(".hextext").css("border", "8px solid #EE5D5D");
		$(".hextext-p").text("INCORRECT");
		$(".hextext-p").css("color", "#EE5D5D");
	}
	delayedGame();
});

$(".replay-wrapper").click(function() {
	document.location.reload();
});
