var scrollWhell;
var scrollGesture;
var internalScrollWhell;
var internalScrollGesture;
var timeline;
var timeline2;
var background;
var clicked = false;
var axisScrollX = {min: 0, max: 0};
var axisScrollY = {min: 0, max: 100};
var currentJobIndex = -1;
var currentJobData = {};
var texts = [];
var useClick = true;


var MOUSE_EVENT = {
	CLICK: (Modernizr.touchevents) ? 'touchend' : 'click',
	PRESS: (Modernizr.touchevents) ? 'touchstart' : 'mousedown',
	RELEASE: (Modernizr.touchevents) ? 'touchend' : 'mouseup',
	MOVE: (Modernizr.touchevents) ? 'touchmove' : 'mousemove',
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
	timeline.progress(currentTime);
}

function internalScrollGesture_callback ( event ) {
	var currentTime = internalScrollGesture.animated_position.y / 100;
	setTimelineProgressInternal(currentTime);
}

function internalScrollWhell_callback ( event ) {
	var currentTime = internalScrollWhell.animated_position.y / 100;
	setTimelineProgressInternal(currentTime);
}

function setTimelineProgressInternal ( currentTime ) {
	timeline2.progress(currentTime);
}

function button_MOVE ( event ) {
	useClick = false;
}

function button_PRESS ( event ) {
	useClick = true;
	$(window).bind(MOUSE_EVENT.MOVE, button_MOVE);
}

function button_CLICK ( event ) {
	if( !useClick ){
		useClick = true;
		$(window).unbind(MOUSE_EVENT.MOVE, button_MOVE);
		return;
	}

	if( currentJobIndex != -1 ){
		if(!clicked){
			
			TweenMax.killTweensOf( DisplayList.section_subtitle.container );
			TweenMax.to(DisplayList.section_subtitle.container, .4, { opacity: 0, ease: Cubic.easeOut });
			TweenMax.to(DisplayList.section_jobs.container, 1, { scale: 1, y: '-20%', ease: Cubic.easeInOut, delay: .2 });
			TweenMax.to(DisplayList.section_job.container, 1, { y: '-45%', ease: Cubic.easeInOut, delay: .2 });
			TweenMax.to(DisplayList.section_welcome.container, 1, { y: '-10%', ease: Cubic.easeInOut, delay: .2 });
			TweenMax.fromTo(DisplayList.section_job.content.container, 1, { scale: 1.2, y: '30%' }, { scale: 1, y: '20%', ease: Cubic.easeInOut, delay: .2 });

			clicked = true;

			scrollWhell.enable = scrollGesture.enable = false;
			internalScrollWhell.enable = internalScrollGesture.enable = true;

			
		} else {
			// TweenMax.to(DisplayList.section_jobs.container, 1, { y: '0%', scale: 1.2, ease: Cubic.easeInOut, delay: 0 });
			// TweenMax.fromTo(DisplayList.section_job.content.container, 1, { scale: 1, y: '20%' }, { scale: 1.2, y: '30%', ease: Cubic.easeInOut, delay: 0 });
			// TweenMax.to(DisplayList.section_welcome.container, 1, { y: '0%', ease: Cubic.easeInOut, delay: 0 });
			// TweenMax.to(DisplayList.section_job.container, 1, { y: '0%', ease: Cubic.easeInOut, delay: 0 });
			// TweenMax.killTweensOf( DisplayList.section_subtitle.container );
			// TweenMax.to(DisplayList.section_subtitle.container, .4, { opacity: 1, ease: Cubic.easeOut, delay: 1 });

			// clicked = false;
			// scrollWhell.enable = scrollGesture.enable = true;
			// internalScrollWhell.enable = internalScrollGesture.enable = false;
		}
	}
}

function init (){
	timeline = new TimelineMax();
	timeline.pause();

	timeline2 = new TimelineMax();
	timeline2.pause();

	background = new BackgroundView();
	background.init();
	background.createParticles();

	new DisplayObject('app', $('.app'));
	new DisplayObject('section_welcome', $('section.welcome'));
	new DisplayObject('section_welcome_paragraphs', $('section.welcome p'));

	new DisplayObject('section_jobs', $('section.jobs'));
	new DisplayObject('section_jobs_thumbs', $('section.jobs div'));

	new DisplayObject('section_job', $('section.job'));
	new DisplayObject('left', $('section.job .left'), DisplayList.section_job);
	new DisplayObject('right', $('section.job .right'), DisplayList.section_job);
	new DisplayObject('content', $('section.job .content'), DisplayList.section_job);

	new DisplayObject('thumb1', $('section.job .content ul li:nth-child(1)'), DisplayList.section_job);
	new DisplayObject('thumb', $('section.job .content ul li:nth-child(1) .thumb'), DisplayList.section_job.thumb1);
	new DisplayObject('overlay', $('section.job .content ul li:nth-child(1) .overlay'), DisplayList.section_job.thumb1);
	new DisplayObject('text', $('section.job .content ul li:nth-child(1) .text'), DisplayList.section_job.thumb1);

	new DisplayObject('thumb2', $('section.job .content ul li:nth-child(2)'), DisplayList.section_job);
	new DisplayObject('thumb', $('section.job .content ul li:nth-child(2) .thumb'), DisplayList.section_job.thumb2);
	new DisplayObject('overlay', $('section.job .content ul li:nth-child(2) .overlay'), DisplayList.section_job.thumb2);
	new DisplayObject('text', $('section.job .content ul li:nth-child(2) .text'), DisplayList.section_job.thumb2);

	new DisplayObject('thumb3', $('section.job .content ul li:nth-child(3)'), DisplayList.section_job);
	new DisplayObject('thumb', $('section.job .content ul li:nth-child(3) .thumb'), DisplayList.section_job.thumb3);
	new DisplayObject('overlay', $('section.job .content ul li:nth-child(3) .overlay'), DisplayList.section_job.thumb3);
	new DisplayObject('text', $('section.job .content ul li:nth-child(3) .text'), DisplayList.section_job.thumb3);

	new DisplayObject('thumb4', $('section.job .content ul li:nth-child(4)'), DisplayList.section_job);
	new DisplayObject('thumb', $('section.job .content ul li:nth-child(4) .thumb'), DisplayList.section_job.thumb4);
	new DisplayObject('overlay', $('section.job .content ul li:nth-child(4) .overlay'), DisplayList.section_job.thumb4);
	new DisplayObject('text', $('section.job .content ul li:nth-child(4) .text'), DisplayList.section_job.thumb4);

	new DisplayObject('section_contact', $('section.contact'));
	new DisplayObject('section_contact_thumbs', $('section.jobs div'));

	new DisplayObject('section_subtitle', $('section.subtitle'));
	new DisplayObject('subtitle_1', $('section.subtitle p:nth-child(1)'), DisplayList.section_subtitle);
	new DisplayObject('subtitle_2', $('section.subtitle p:nth-child(2)'), DisplayList.section_subtitle);

	new DisplayObject('background', $('canvas'));

	timeline.add( TweenMax.fromTo( DisplayList.background.container, 6, { css: {opacity: 0} }, { css: {opacity: 0.6}, ease: Cubic.easeIn } ), 0 );
	timeline.add( TweenMax.to( DisplayList.background.container, 1, { css: {opacity: 1}, ease: Cubic.easeIn } ), 20 );
	timeline.add( TweenMax.to( DisplayList.background.container, 1, { css: {opacity: 0}, ease: Cubic.easeIn } ), 30 );

	timeline.add( TweenMax.to( DisplayList.section_subtitle.subtitle_1.container, 1, {opacity: 0, x: -20, ease: Cubic.easeInOut} ), 2 );
	timeline.add( TweenMax.fromTo( DisplayList.section_subtitle.subtitle_2.container, 1, {opacity: 0, x: 20}, {opacity: 1, x: 0, ease: Cubic.easeInOut} ), 20 );
	timeline.add( TweenMax.to( DisplayList.section_subtitle.subtitle_2.container, 1, {opacity: 0, x: -20, ease: Cubic.easeInOut} ), 27 );

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

		texts[texts.length] = {text: text, highlight: highlight, line: line};
	}

	for ( var i = 1; i <= DisplayList.section_jobs_thumbs.container.length; i++ ) {
		var thumb = new DisplayObject('thumb_' + i, $('section.jobs div:nth-child('+i+')'), DisplayList.section_welcome);
		timeline.add( TweenMax.fromTo( thumb.container, 1, { css: { x: 10, opacity: 0}}, { css: {x: 0, opacity: 0.9}, ease: Cubic.easeInOut, onUpdate: function( index ){
			currentJobIndex = index;
		}, onUpdateParams: [i] } ), (i) + 19 );
		timeline.add( TweenMax.to( thumb.container, 1, { css: {x: -10, opacity: 0}, ease: Cubic.easeInOut } ), (i + 1) + 19 );
	}

	timeline.add( TweenMax.to( DisplayList.background.container, 2, { css: {opacity: 0.2}, ease: Cubic.easeIn } ), 19 + DisplayList.section_jobs_thumbs.container.length );

	timeline2.add( TweenMax.to(DisplayList.section_job.container, 0.5, { y: '-100%', ease: Cubic.easeInOut }), 0 );
	timeline2.add( TweenMax.to(DisplayList.section_jobs.container, 0.5, { y: '-50%', ease: Cubic.easeInOut }), 0 );

	timeline2.add( TweenMax.to(DisplayList.section_welcome.container, 0.5, { opacity: 0, ease: Cubic.easeInOut }), 0 );
	timeline2.add( TweenMax.to(DisplayList.section_welcome.container, 0.5, { y: '-80%', ease: Cubic.easeInOut }), 0 );

	timeline2.add( TweenMax.to(DisplayList.section_job.content.container, 0.5, { scale: 1, y: '0%', ease: Cubic.easeInOut }), 0 );

	timeline2.add( TweenMax.fromTo(DisplayList.section_job.left.container, 0.5, { y: '100%' }, { y: '0%', ease: Cubic.easeInOut }), 0 );
	timeline2.add( TweenMax.fromTo(DisplayList.section_job.right.container, 0.5, { y: '-100%' }, { y: '0%', ease: Cubic.easeInOut }), 0.2 );

	var item = null;

	item = DisplayList.section_job['thumb1'];

	timeline2.add( TweenMax.fromTo(item.overlay.container, 1, {y: '0%'}, { y: '-200%', ease: Linear.easeNone }), 0 );
	timeline2.add( TweenMax.fromTo(item.text.container, 1, {y: '50%'}, { y: '-50%', ease: Linear.easeNone }), 0 );
	timeline2.add( TweenMax.fromTo(item.thumb.container, 1, {y: '20%'}, { y: '-20%', ease: Linear.easeNone }), 0 );

	for ( var i = 0; i < 3; i++ ) {
		var index = i + 2;
		item = DisplayList.section_job['thumb' + index];
		timeline2.add( TweenMax.fromTo(item.overlay.container, 1, {y: '100%'}, { y: '-100%', ease: Linear.easeNone }), .5 + i );
		timeline2.add( TweenMax.fromTo(item.text.container, 0.01, {opacity: 0}, { opacity: 1, ease: Linear.easeNone }), 1 + i );
		timeline2.add( TweenMax.fromTo(item.text.container, 1, {y: '50%'}, { y: '-50%', ease: Linear.easeNone }), 1 + i );
		timeline2.add( TweenMax.fromTo(item.thumb.container, 0.01, {opacity: 0}, { opacity: 1, ease: Linear.easeNone }), 1 + i );
		timeline2.add( TweenMax.fromTo(item.thumb.container, 1, {y: '20%'}, { y: '-20%', ease: Linear.easeNone }), 1 + i );
	}
	

	scrollWhell = new ScrollWhell( axisScrollX, axisScrollY, scrollWhell_callback );
	scrollGesture = new ScrollGesture( axisScrollX, axisScrollY, scrollGesture_callback );

	internalScrollWhell = new ScrollWhell( axisScrollX, axisScrollY, internalScrollWhell_callback );
	internalScrollGesture = new ScrollGesture( axisScrollX, axisScrollY, internalScrollGesture_callback );
	internalScrollWhell.enable = internalScrollGesture.enable = false;

	$(window).bind(MOUSE_EVENT.CLICK, button_CLICK);
	$(window).bind(MOUSE_EVENT.PRESS, button_PRESS);

	scrollWhell.position.y = scrollWhell.animated_position.y = 74;
	setTimelineProgress(scrollWhell.animated_position.y / 100);
}

$(document).ready( function(){
	init();
} );