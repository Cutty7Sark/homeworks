//#1
function greaterNum (number, number2) {
	if (number > number2) {
		return number;
	} else {
		return number2;
	}
};

alert(greaterNum(21,10));

//#2
function helloWorld (lang) {
	if (lang == 'eng') {
		return 'Hello, World!';
	} else if (lang == 'ukr') {
		return 'Вiтаю, свiте!';
	} else if (lang == 'ru') {
		return 'Дарова, мир!';
	}
};

console.log(helloWorld('eng'));
console.log(helloWorld('ru'));
console.log(helloWorld('ukr'));

//#2 другая реализация
function helloWorld (lang) {
	switch (lang) {
	case 'eng': {
		return 'Hello, World!';
		break;}
	case 'ukr': {
		 return 'Вiтаю, свiте!';
		 break;}
	default: 
		return 'Дарова, мир!';
}
};

//#3
function assignGrade(grade) {
    if (grade > 90) {
        return '5';
    } else if (grade >= 75) {
        return '4';
    } else if (grade >= 60) {
        return '3';
    } else if (grade >= 50) {
        return '2';
    } else {
        return '1';
    }
};

console.log('Ваша оценка: ' + assignGrade(91));