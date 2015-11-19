var prototypeShape = {
	color: 'yellow',

	render: function render() {
		var element = document.createElement('div');
		element.style.height = this.height + 'px';
		element.style.width = this.width + 'px';
		element.style.borderRadius = Math.floor(this.diameter/2) + 'px';
		element.style.background = prototypeShape.color;
		element.style.position = 'absolute';
		element.style.top = this.top + 'px';
		element.style.left = this.left + 'px';
		document.body.appendChild(element);
		this.element = element;
	},

	move: function move(where) {
		switch(where) {
  			case 'up':
    		this.element.style.top = (parseInt(this.element.style.top, 10) - parseInt(this.element.style.height, 10)) + 'px';      
    		break;
    		case 'down':
    		this.element.style.top = (parseInt(this.element.style.top, 10) + parseInt(this.element.style.height, 10)) + 'px';
    		break;
    		case 'left':
    		this.element.style.left = (parseInt(this.element.style.left, 10) - parseInt(this.element.style.width, 10)) + 'px';
    		break;
    		default:
    		this.element.style.left = (parseInt(this.element.style.left, 10) + parseInt(this.element.style.width, 10)) + 'px';
 		}
  		console.log('step',where);
	},

	run: function run(where) {
		console.log('going',where,'for 15sec');
		var intervalID = setInterval(function() {
			circle.move(where);
	  		square.move(where);
		}, 1000);
		setTimeout(function() {
	  		clearInterval(intervalID);
		}, 15000);
	},

	changeColor: function changeColor() {
		console.log('changing color to blue');
		prototypeShape.color = 'blue';
	},

};

var circle = Object.create(prototypeShape);
circle.top = 5;
circle.left = 5;
circle.height = 75;
circle.width = 75;
circle.diameter = 75;

var square = Object.create(prototypeShape);
square.top = 250;
square.left = 350;
square.height = 55;
square.width = 55;

var shapes = [circle, square];

function makeTable() {
	console.table(shapes, ["color", "diameter", "height", "width"]);
}