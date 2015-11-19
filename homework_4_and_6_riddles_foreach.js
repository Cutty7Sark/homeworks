var clueLetters = ['В', 'Е', 'Т', 'Е', 'Р'];
var guessedLetters = ['_', '_', '_', '_', '_'];
var totalPrize = 0;
var check = 0;

var game = {
	initialize: function() {
		var attempt = prompt('Введите букву');
		game.guessLetter(clueLetters, attempt);
	},

	guessLetter: function(array, attempt) {
		var niceChoice = false;
		var leftLetters = false;
		function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		}
		clueLetters.forEach(function(element, i, clueLetters) {
			if (element == attempt) {
				guessedLetters[i] = attempt;
				niceChoice = true;
				check ++;
			}
			else if (element !== attempt) {
				check = 0;
			}
			if (guessedLetters[i] == '_') {
				leftLetters = true;
			}
		});

		if (niceChoice) {
   			var howMany = 0;
   			for (i = 0; i < guessedLetters.length; i++) {
    			if (guessedLetters[i] == '_') {
		       		howMany = howMany + 1;
    			};
		  	}

		  	if (check > 1) {
		  		totalPrize += getRandomInt(10, 51)*2;
		  	} else {
		  		totalPrize += getRandomInt(10, 51);
		  	}
			console.log('Well done! Your prize is', totalPrize,'$ now. Guess', howMany, 'letters more');
    		console.log(guessedLetters.join(''));

    		if (!leftLetters) {
				console.log('Congrats! You won! Your total prize is', totalPrize,'$.');
			} else {
				game.initialize();
			};
    	} else {
			console.log('Bad choice! Try again!');
			game.initialize();
		}		
	}
}

game.initialize();