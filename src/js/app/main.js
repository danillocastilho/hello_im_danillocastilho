var scrollWhell;
var scrollGesture;
var timeline;

var MOUSE_EVENT = {
	CLICK: (Modernizr.touchevents) ? 'touchend' : 'click',
	OVER: (Modernizr.touchevents) ? '' : 'mouseenter',
	OUT: (Modernizr.touchevents) ? '' : 'mouseleave',
};

function scrollGesture_callback ( event ) {
	var currentTime = scrollGesture.animated_position.y / 20;
	setTimelineProgress(currentTime);
}

function scrollWhell_callback ( event ) {
	var currentTime = scrollWhell.animated_position.y / 20;
	setTimelineProgress(currentTime);
}

function setTimelineProgress ( currentTime ) {
	timeline.progress(currentTime);
}

function init (){
	var axisScrollX = {min: 0, max: 0};
	var axisScrollY = {min: 0, max: 100};

	timeline = new TimelineMax();
	timeline.pause();
	timeline.progress(0);

	new DisplayObject('app', $('.app'));
	new DisplayObject('section_welcome', $('section.welcome'));

	for ( var i = 1; i <= 6; i++ ) {
		var text = new DisplayObject('text_' + i, $('section.welcome p:nth-child('+i+')'), DisplayList.section_welcome);
		var highlight = new DisplayObject('text_highlight' + i, $('section.welcome p:nth-child('+i+') .highlight'), DisplayList.section_welcome);

		if( i != 1 ){
			timeline.add( TweenMax.fromTo( text.container, 1, { css: {x: 0, opacity: 0.1}}, { css: {x: 0, opacity: 1}, ease: Cubic.easeInOut } ), i );
		}
		timeline.add( TweenMax.to( text.container, 1, { css: {x: 10, opacity: 0.1}, ease: Cubic.easeInOut } ), i + 1 );
		timeline.add( TweenMax.to( highlight.container, 1, { css: {y: 10, opacity: 0.1}, ease: Cubic.easeIn } ), i + 0.5 );
	}

	scrollWhell = new ScrollWhell( axisScrollX, axisScrollY, scrollWhell_callback );
	scrollGesture = new ScrollGesture( axisScrollX, axisScrollY, scrollGesture_callback );
}

$(document).ready( function(){
	init();
} );