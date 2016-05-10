module.exports = NavigationController

var Controller          = require('./abstract/Controller');

function NavigationController ( id ) {
	Controller.call(this, id);
}

NavigationController.prototype = Object.create(Controller.prototype, {
	constructor: NavigationController
})

NavigationController.prototype.create = function () {
	Controller.prototype.create.call(this);
	// console.log( '[NavigationController] create' );
	this.progress_bar = $(this.view).find('.bar-scroll');

	return this;
}

NavigationController.prototype.init = function () {
	Controller.prototype.init.call(this);
	Controller.prototype.show.call(this);
	// console.log('STATE',this.state);
	// console.log('LANGUAGE',this.language);
	// console.log( '[NavigationController] init' );

	return this;
}

NavigationController.prototype.open = function () {
	// console.log( '[NavigationController] open' );
  	TweenMax.to( this.view, .6, {opacity: 1, ease: Cubic.easeOut, onComplete: this.onOpen.bind(this) } )

  	return this;
}

NavigationController.prototype.onOpen = function () {
	// console.log( '[NavigationController] onOpen' );
  	this.dispatchEvent(Controller.EVENT.OPEN);

  	return this;
}

NavigationController.prototype.close = function () {
	// console.log( '[NavigationController] close' );
  	TweenMax.to( this.view, .6, {opacity: 0, ease: Cubic.easeOut, onComplete: this.onClose.bind(this) } )

  	return this;
}

NavigationController.prototype.onClose = function () {
	// console.log( '[NavigationController] onClose' );
  	this.dispatchEvent(Controller.EVENT.CLOSE);

  	return this;
}

NavigationController.prototype.dispose = function () {
  	// console.log( '[NavigationController] dispose' );
  	Controller.prototype.dispose.call(this);
  	Controller.prototype.hide.call(this);

  	return this;
}

NavigationController.prototype.updateLanguage = function () {
  	// console.log( '[NavigationController] updateLanguage', this.view );
}

NavigationController.prototype.updateSize = function () {
  	// console.log( '[NavigationController] updateSize', this.view );
}

NavigationController.prototype.setBarPercent = function ( percent ) {
	TweenMax.to( this.progress_bar, .2, { y: percent+'%', ease: Linear.easeNone } )
}

module.exports = NavigationController