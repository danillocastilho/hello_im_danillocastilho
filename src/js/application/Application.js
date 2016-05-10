var Timeline        			= require('./animation/Timeline');

var NavigationController      	= require('./controller/NavigationController');
var AboutController          	= require('./controller/AboutController');
var WorkController          	= require('./controller/WorkController');
var ContactController         	= require('./controller/ContactController');
var ProjectController         	= require('./controller/ProjectController');

var CustomScroll          		= require('./utils/CustomScroll');

function Application () {
	this.init()
}

Application.prototype = {
	navigation: null,
	controllers: {},
	timeline: null,
	scroll: null,
	inited: false,

	init : function () {
		this.timeline 				= Timeline.getInstance();
		
		this.controllers.project 	= new ProjectController.getInstance( '.app section.project' ).create().init();
		this.controllers.about 		= new AboutController( '.app section.about' ).create().init();
		this.controllers.work 		= new WorkController( '.app section.work' ).create().init();
		this.controllers.contact 	= new ContactController( '.app section.contact' ).create().init();

		this.navigation 			= new NavigationController( '.app section.navigation' ).create().init();

		this.app 					= $('.app');
		
		this.background_layer_1 	= $('section.background .layer-1');
		this.graphs_graph_1 		= $('section.navigation .graphs .graph-1');
		this.graphs_graph_2 		= $('section.navigation .graphs .graph-2');
		this.border_layer_left 		= $('section.navigation .border .left');
		this.border_layer_top 		= $('section.navigation .border .top');
		this.border_layer_right 	= $('section.navigation .border .right');
		this.border_layer_bottom 	= $('section.navigation .border .bottom');
		this.bar_background 		= $('section.navigation .bar-background');

		this.scroll = new CustomScroll(0, this.timeline.timeline.duration());
		this.scroll.enable = false;
		$(this.scroll).bind( CustomScroll.EVENT.MOVE, this.general_SCROLL.bind(this) );

		this.app.css('opacity', 1);

		TweenMax.to( this.background_layer_1, 1, { x: 0, y: 0, rotationY: 0, rotationZ: 0, ease: Cubic.easeInOut, delay: 0.5 } );
		TweenMax.to( this.border_layer_left, 1, { x: 0, y: 0, ease: Cubic.easeInOut, delay: 0.5 } );
		TweenMax.to( this.border_layer_top, 1, { x: 0, y: 0, ease: Cubic.easeInOut, delay: 0.5 } );
		TweenMax.to( this.border_layer_right, 1, { x: 0, y: 0, ease: Cubic.easeInOut, delay: 1.4 } );
		TweenMax.to( this.border_layer_bottom, 1, { x: 0, y: 0, ease: Cubic.easeInOut, delay: 1.4 } );
		TweenMax.to( this.graphs_graph_1, 0, { rotation: 45, ease: Cubic.easeInOut, delay: 0 } );
		TweenMax.to( this.graphs_graph_2, 0, { rotation: 45, ease: Cubic.easeInOut, delay: 0 } );
		TweenMax.to( this.graphs_graph_1, 1, { x: 0, y: 0, rotation: 45, ease: Cubic.easeInOut, delay: 1 } );
		TweenMax.to( this.bar_background, .6, { opacity: 1, ease: Cubic.easeInOut, delay: 2 } );
		TweenMax.to( this.graphs_graph_2, 1.5, { x: 0, y: 0, rotation: 45, ease: Cubic.easeInOut, delay: 1, onComplete: this.onOpen.bind(this) } );

		var graphsTime = this.timeline.duration();

		this.timeline.add( TweenMax.to( this.graphs_graph_1, graphsTime, { x: -200, y: 200, ease: Cubic.easeInOut, delay: 1 } ), 1 );
		this.timeline.add( TweenMax.to( this.graphs_graph_2, graphsTime + 10, { x: 200, y: -200, ease: Cubic.easeInOut, delay: 1 } ), 1 );
	},

	onOpen: function () {
		if( this.scroll ){
			this.scroll.enable = true;
		}
	},

	general_SCROLL: function ( event ){
		this.navigation.setBarPercent(event.target.percent);
		this.timeline.timeline.time( event.target.scroll );
	},
}

module.exports = Application;