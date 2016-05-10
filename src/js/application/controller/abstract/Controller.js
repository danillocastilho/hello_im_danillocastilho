var Timeline       		= require('./../../animation/Timeline');

function Controller ( id ) {
	this.id 			= id;
}

Controller.EVENT = {
	OPEN: 'CONTROLLER.OPEN',
	CLOSE: 'CONTROLLER.CLOSE',
}

Controller.prototype = {
	id: null,
	view: null,

	create : function () {
		this.view = $( this.id );
		this.window 		= $(window);
		this.timeline 		= Timeline.getInstance();

		window.requestAnimFrame = (function(){
		  return  window.requestAnimationFrame       ||
		          window.webkitRequestAnimationFrame ||
		          window.mozRequestAnimationFrame    ||
		          function( callback ){
		            window.setTimeout(callback, 1000 / 60);
		          };
		})();

		this.hide();
	},

	init: function () {
		$(window).bind('resize', this.window_RESIZE.bind(this) );
		this.window_RESIZE();
		this.updateLanguage();
	},

	dispose: function () {
		$(this.languages).unbind(LanguageModel.EVENT.SWITCH);
		$(window).unbind('resize');
	},

	show: function () {
		this.view.css('visibility', 'visible');
		this.view.css('opacity', '1');
	},

	hide: function () {
		this.view.css('opacity', '0');
		this.view.css('visibility', 'hidden');
	},

	addEventListener: function(evt, callback) {
		if (!this.hasOwnProperty(evt)){ this[evt] = Array() }
		this[evt].push(callback);
		return this;
	},

	removeEventListener: function(evt, callback) {
		this[evt] = [];
	},

	dispatchEvent: function(evt, params) {
		if (evt in this) {
		    callbacks = this[evt];
		    for (var x in callbacks){ callbacks[x](params)}
		}
		return this;
	},

	language_SWITCH: function ( event ) {
		
	},

	updateLanguage: function ( event ) {

	},

	window_RESIZE: function ( event ) {
		this.updateSize( event );
	},

	updateSize: function ( event ) {
		
	},

	animate: function () {
		this.render_UPDATE();
	},

	render_UPDATE: function () {
		this.updateRender();
		requestAnimFrame(this.render_UPDATE.bind(this));
	},

	updateRender: function () {

	},
}

module.exports = Controller;