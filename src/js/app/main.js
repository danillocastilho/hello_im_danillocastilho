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

function openJob () {
	TweenMax.to(DisplayList.section_welcome.container, 1, {css: {y: '-40%', x: -50}, ease: Strong.easeOut });
	TweenMax.to(DisplayList.section_jobs.container, 1, {css: {y: '-30%', x: 100}, ease: Strong.easeOut });
}

function closeJob () {
	TweenMax.to(DisplayList.section_welcome.container, 1, {css: {y: '0%', x: 0}, ease: Strong.easeOut });
	TweenMax.to(DisplayList.section_jobs.container, 1, {css: {y: '0%', x: 0}, ease: Strong.easeOut });
}

function job_CLICK ( event ) {
	if( state == 'home' ){
		state = 'job';
		openJob();
	} else {
		state = 'home';
		closeJob();
	}
	
}


function init (){
	var axisScrollX = {min: 0, max: 0};
	var axisScrollY = {min: 0, max: 100};

	timeline = new TimelineMax();
	timeline.pause();

	background = new BackgroundView();
	background.init();
	background.createParticles();

	new DisplayObject('app', $('.app'));
	new DisplayObject('section_welcome', $('section.welcome'));
	new DisplayObject('section_welcome_paragraphs', $('section.welcome p'));

	new DisplayObject('section_jobs', $('section.jobs'));
	new DisplayObject('section_jobs_thumbs', $('section.jobs div'));

	new DisplayObject('section_contact', $('section.contact'));
	new DisplayObject('section_contact_thumbs', $('section.jobs div'));

	new DisplayObject('background', $('canvas'));

	timeline.add( TweenMax.to( DisplayList.background.container, 15, { css: {opacity: 0.4}, ease: Cubic.easeIn } ), 0 );
	timeline.add( TweenMax.to( DisplayList.background.container, 3, { css: {opacity: 0.2}, ease: Cubic.easeIn } ), 18 );
	timeline.add( TweenMax.to( DisplayList.background.container, 3, { css: {opacity: 0.4}, ease: Cubic.easeIn } ), 25 );

	for ( var i = 1; i <= DisplayList.section_welcome_paragraphs.container.length; i++ ) {
		var text = new DisplayObject('text_' + i, $('section.welcome p:nth-child('+i+')'), DisplayList.section_welcome);
		var highlight = new DisplayObject('text_highlight' + i, $('section.welcome p:nth-child('+i+') .text-highlight'), DisplayList.section_welcome);
		var line = new DisplayObject('text_highlight' + i, $('section.welcome p:nth-child('+i+') .horizontal-line'), DisplayList.section_welcome);

		if( i != 1 ){
			timeline.add( TweenMax.fromTo( text.container, 1, { css: { x: 10, scale: 0.95, opacity: 0.02}}, { css: {x: 0, scale: 1, opacity: 1}, ease: Cubic.easeInOut } ), i );
		}
		if(i < DisplayList.section_welcome_paragraphs.container.length){
			timeline.add( TweenMax.to( text.container, 1, { css: {x: 10, scale: 1, opacity: 0.02}, ease: Cubic.easeInOut } ), i + 1 );	
			timeline.add( TweenMax.to( highlight.container, 1, { css: {y: 15, opacity: 0.02}, ease: Cubic.easeIn } ), i + 0.8 );
			timeline.add( TweenMax.to( line.container, 1, { css: {width: 9}, ease: Cubic.easeIn } ), i + 0.6 );
		}
	}

	for ( var i = 1; i <= DisplayList.section_jobs_thumbs.container.length; i++ ) {
		var thumb = new DisplayObject('thumb_' + i, $('section.jobs div:nth-child('+i+')'), DisplayList.section_welcome);
		timeline.add( TweenMax.fromTo( thumb.container, 1, { css: { x: 10, opacity: 0}}, { css: {x: 0, opacity: 1}, ease: Cubic.easeInOut } ), (i) + 19 );
		timeline.add( TweenMax.to( thumb.container, 1, { css: {x: -10, scale: 1, opacity: 0.02}, ease: Cubic.easeInOut } ), (i + 1) + 19 );
	}

	$(DisplayList.app.container).bind(MOUSE_EVENT.CLICK, job_CLICK);

	// for ( var i = 1; i <= DisplayList.section_contact_thumbs.container.length; i++ ) {
	// 	var thumb = new DisplayObject('thumb_' + i, $('section.contact div:nth-child('+i+')'), DisplayList.section_welcome);
	// 	timeline.add( TweenMax.fromTo( thumb.container, 1, { css: { x: 10, opacity: 0}}, { css: {x: 0, opacity: 1}, ease: Cubic.easeInOut } ), (i) + 28 );
	// 	timeline.add( TweenMax.to( thumb.container, 1, { css: {x: -10, scale: 1, opacity: 0.02}, ease: Cubic.easeInOut } ), (i + 1) + 28 );
	// }

	// timeline.progress(0.74);

	scrollWhell = new ScrollWhell( axisScrollX, axisScrollY, scrollWhell_callback );
	scrollGesture = new ScrollGesture( axisScrollX, axisScrollY, scrollGesture_callback );
}

$(document).ready( function(){
	init();
} );