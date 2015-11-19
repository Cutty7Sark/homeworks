//#1
function getRandomInt(min, max) {
				return Math.floor(Math.random() * (max - min)) + min;
	};

var arr = [];
for (var i = 0; i <= 20; i++) {
	arr[i] = getRandomInt(0, 21);

    if (i % 2 === 0) {
        console.log(i + ' - четное число');
    } else {
        console.log(i + ' - нечетное число');
    }
};

//#2

var nine = 9;
for (var i = 0; i <= 10; i++) {
    var result = i * nine;
    console.log(i + ' * ' + nine + ' = ' + result);
};

for (var i = 0; i <= 10; i++) {
	for (var j = 0; j <= 10; i++) {
		var result = i * j;
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
}

for (var i = 40; i <= 100; i++) {
  console.log(i + ' баллов - это оценка ' + assignGrade(i));
}