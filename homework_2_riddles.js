var clueLetters = ['В', 'Е', 'Т', 'Е', 'Р'];
var guessedLetters = ['_', '_', '_', '_', '_'];
var i;
var totalPrize = 0;
var check = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function guessLetter(attempt) {
var niceChoice = false;
var badChoice = false;
var congrat = false;
for (i = 0; i < clueLetters.length; i++) {
    if (clueLetters[i] == attempt) {
  	   guessedLetters[i] = attempt;
  	   niceChoice = true;
       check ++;
    }
    else if (clueLetters[i] !== attempt) {
          	badChoice = true;
            check = 0;
         }
}
for (i = 0; i < guessedLetters.length; i++) {
  	if (guessedLetters[i] == '_') {
        congrat = true;}
}
if (niceChoice) {
    var howMany = 0;
  	for (i = 0; i < guessedLetters.length; i++) {
    		if (guessedLetters[i] == '_') {
	       		howMany = howMany + 1;
    		}
	  }    
    if (check > 1) {
      totalPrize += getRandomInt(10, 51)*2;
    }
    else {totalPrize += getRandomInt(10, 51);}
	  console.log('Well done! Your prize is', totalPrize,'$ now. Guess', howMany, 'letters more');
    console.log(guessedLetters.join(''));
    if (!congrat) {console.log('Congrats! You won! Your total prize is', totalPrize,'$.');}
}
else if (badChoice) {
	console.log('Bad choice! Try again!');
}
}
guessLetter('Е');
guessLetter('К');
guessLetter('В');
guessLetter('Р');
guessLetter('Т');