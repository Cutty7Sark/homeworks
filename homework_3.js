var cuttySark = {
	hairColor: 'red',
	favoriteMusic: 'rock',
	favoriteBook: 'LotR',
	sayHi: function(whoYou) {
		alert('Mae govannen, ' + whoYou + '!');
	}
};

cuttySark.getBook = function() {
	return cuttySark.favoriteBook;
}

cuttySark.changeHairColor = function(hairDye) {
	cuttySark.hairColor = hairDye.color;
	return cuttySark.hairColor;
}
var hairDye = {
	color: 'blue'
}

cuttySark.getExpectedSalary = function(concertQuantity) {
	var wage = (3000 * (concertQuantity + 12)) / 12;
	return ('Чтобы сходить на ' + concertQuantity + ' концертов за год, нужна зарплата около ' + wage.toFixed(2) + 'грн');
}

cuttySark.getConcertNumber = function(work) {
	var concertNumber = (work.salary * 12) / 8000;
	if (concertNumber >= 5)
		return ('Не менее пяти концертов в год - это норма!');
	else return ('Нужно больше золота!');
}

work = {
	salary: 3568
}

// cuttySark.changeHairColor(hairDye);
// cuttySark.sayHi('Marty');
// cuttySark.getBook();
// cuttySark.getExpectedSalary(3);
// cuttySark.getConcertNumber(work);