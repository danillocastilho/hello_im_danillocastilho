var scrollWhell;
var scrollGesture;
var timeline;
var background;

var MOUSE_EVENT = {
	CLICK: (Modernizr.touchevents) ? 'touchend' : 'click',
	OVER: (Modernizr.touchevents) ? '' : 'mouseenter',
	OUT: (Modernizr.touchevents) ? '' : 'mouseleave',
};

function scrollGesture_callback ( event ) {
	var currentTime = scrollGesture.animated_position.y / 100;
	setTimelineProgress(currentTime);
}

function scrollWhell_callback ( event ) {
	var currentTime = scrollWhell.animated_position.y / 100;
	setTimelineProgress(currentTime);
}

function setTimelineProgress ( currentTime ) {
	// currentTime = ( currentTime < 0.06 ) ? 0.06 : currentTime;
	timeline.progress(currentTime);
}

var state = 'home';

function job_CLICK ( event ) {
	if( state == 'home' ){
		state = 'job';
		openJob();
	} else {
		state = 'home';
		closeJob();
	}
	
}

var menu;

function MenuItem ( target ) {
	this.target 	= target;
	this.bar 		= target.children[0];
	this.text 		= target.children[1];

	this.over = function ( event ) {
		TweenMax.to( this.text, .6, { x: 0, ease: Cubic.easeOut } );
		TweenMax.to( this.bar, .6, { x: -10, ease: Cubic.easeOut } );
	}

	this.out = function ( event ) {
		TweenMax.to( this.text, .6, { x: 0, ease: Cubic.easeOut } );
		TweenMax.to( this.bar, .6, { x: 0, ease: Cubic.easeOut } );
	}

	this.click = function ( event ) {
		// TweenMax.to( this.text, .6, { css: { x: 0, scale: 0 }, ease: Cubic.easeOut } );
	}

	this.init = function () {
		$(this.text).bind(MOUSE_EVENT.OVER, this.over.bind(this) );
		$(this.text).bind(MOUSE_EVENT.OUT, this.out.bind(this) );
		$(this.text).bind(MOUSE_EVENT.CLICK, this.click.bind(this) );
	}
	return this;
}

function menu_OVER ( event ) {
	console.log('over');
}

function menu_OUT ( event ) {
	console.log('out');
}

function menu_CLICK ( event ) {
	console.log('menu click');
}

function init (){
	var axisScrollX = {min: 0, max: 0};
	var axisScrollY = {min: 0, max: 100};

	timeline = new TimelineMax();
	timeline.pause();

	menu = $('section.welcome ul li');

	for ( var i = 0; i < menu.length; i++ ) {
		var item = menu[i];
		// var link = item.children[1];
		// $(link).bind(MOUSE_EVENT.OVER, menu_OVER);
		// $(link).bind(MOUSE_EVENT.OUT, menu_OUT);
		// $(link).bind(MOUSE_EVENT.CLICK, menu_CLICK);

		new MenuItem( menu[i] ).init();
	}

	// background = new BackgroundView();
	// background.init();
	/*

	new DisplayObject('app', $('.app'));
	new DisplayObject('section_welcome', $('section.welcome'));
	new DisplayObject('section_welcome_paragraphs', $('section.welcome p'));

	new DisplayObject('section_jobs', $('section.jobs'));
	new DisplayObject('section_jobs_thumbs', $('section.jobs div'));

	new DisplayObject('section_contact', $('section.contact'));
	new DisplayObject('section_contact_thumbs', $('section.jobs div'));

	new DisplayObject('background', $('canvas'));

	timeline.add( TweenMax.to( background.root.position, 25, { y: 1500, ease: Cubic.easeInOut } ), 0 );
	timeline.add( TweenMax.to( background.light, 25, { intensity: 0, ease: Cubic.easeInOut } ), 0 );

	for ( var i = 1; i <= DisplayList.section_welcome_paragraphs.container.length; i++ ) {
		var text = new DisplayObject('text_' + i, $('section.welcome p:nth-child('+i+')'), DisplayList.section_welcome);
		var highlight = new DisplayObject('text_highlight' + i, $('section.welcome p:nth-child('+i+') .text-highlight'), DisplayList.section_welcome);
		var line = new DisplayObject('text_highlight' + i, $('section.welcome p:nth-child('+i+') .horizontal-line'), DisplayList.section_welcome);

		if( i != 1 ){
			timeline.add( TweenMax.fromTo( text.container, 1, { css: { x: 10, scale: 0.95, opacity: 0}}, { css: {x: 0, scale: 1, opacity: 1}, ease: Cubic.easeInOut } ), i );
		}
		if(i < DisplayList.section_welcome_paragraphs.container.length){
			timeline.add( TweenMax.to( text.container, 1, { css: {x: 10, scale: 1, opacity: 0}, ease: Cubic.easeInOut } ), i + 1 );	
			timeline.add( TweenMax.to( highlight.container, 1, { css: {y: 15, opacity: 0}, ease: Cubic.easeIn } ), i + 0.8 );
			timeline.add( TweenMax.to( line.container, 1, { css: {width: 9}, ease: Cubic.easeIn } ), i + 0.6 );
		}
	}
	*/
	/*
	for ( var i = 1; i <= DisplayList.section_jobs_thumbs.container.length; i++ ) {
		var thumb = new DisplayObject('thumb_' + i, $('section.jobs div:nth-child('+i+')'), DisplayList.section_welcome);
		timeline.add( TweenMax.fromTo( thumb.container, 1, { css: { x: 10, opacity: 0}}, { css: {x: 0, opacity: 1}, ease: Cubic.easeInOut } ), (i) + 19 );
		timeline.add( TweenMax.to( thumb.container, 1, { css: {x: -10, scale: 1, opacity: 0.02}, ease: Cubic.easeInOut } ), (i + 1) + 19 );
	}
	*/

	scrollWhell = new ScrollWhell( axisScrollX, axisScrollY, scrollWhell_callback );
	scrollGesture = new ScrollGesture( axisScrollX, axisScrollY, scrollGesture_callback );
}

$(document).ready( function(){
	init();
} );