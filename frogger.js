function Frogger () {
	this.stage 					= document.getElementById('stage');

	this.streets 				= document.querySelectorAll('.street'); 	

	this.frog 					= document.getElementById('frog');
	this.frogAxis 			=  this.getFrogAxis();

	//this.cars 					= this.updateCars();
	this.carsAxis 			= 0;
	this.carStyle 			= {
		width 	: 10,
		height 	: 10,
		space 	: 10 
	};
	this.carsAmount 	= this.setCarsAmount();

}

Frogger.prototype.init = function() {
	this.moveCars();
};

Frogger.prototype.moveCars = function() {	

	var cars = this.updateCars();

	for (var i = cars.length - 1; i >= 0; i--) {
		this.carsAxis = cars[i].offsetLeft + Math.floor(Math.random()*20);
		if ( cars[i].offsetLeft >= cars[i].parentElement.clientWidth ){
			this.carsAxis = 0;
		}
		cars[i].style.left = this.carsAxis + "px";

	};

};

Frogger.prototype.moveFrog = function(e) {
	switch(e.which){
		case 38: this.moveUp();
			break;
		case 40: this.moveDown();
		 break;
		case 39: this.moveRight();
			break;
		case 37 : this.moveLeft();
			break;
		default : console.log('aqui');
	}
};

Frogger.prototype.moveUp = function() {
	this.frogAxis.y += 1;
	this.frog.style.bottom = this.frogAxis.y + "px";
};

Frogger.prototype.moveDown = function () {
	this.frogAxis.y -= 1;
	this.frog.style.bottom = this.frogAxis.y + "px";
};

Frogger.prototype.moveLeft = function () {
	this.frogAxis.x -= 1;
	this.frog.style.left = this.frogAxis.x + "px";
};

Frogger.prototype.moveRight = function () {
	this.frogAxis.x += 1;
	this.frog.style.left = this.frogAxis.x + "px";
};

Frogger.prototype.getFrogAxis = function () {
	var
		axis = {},
		style = window.getComputedStyle(this.frog);

		return axis = {
			y : parseInt( style.getPropertyValue("bottom"), 10),
			x : parseInt( style.getPropertyValue("left"), 10 )
		}

};

Frogger.prototype.setCarsAmount = function() {
	return Math.round( this.getStageWidth() / ( this.carStyle.width + this.carStyle.space ) );
};

Frogger.prototype.getStageWidth = function() {
	return this.stage.clientWidth;
};

Frogger.prototype.loadCars = function() {
	

	for (var i = this.streets.length - 1; i >= 0; i--) {
		var 
		newCar = document.createElement('div');
		newCar.setAttribute('class','car');

		console.log(i + ' - ' + this.streets[i].childElementCount)
		this.streets[i].appendChild(newCar);
	};

};

Frogger.prototype.updateCars = function() {
	return document.querySelectorAll(".car");
};