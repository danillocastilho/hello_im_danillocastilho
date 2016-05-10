var Controller          = require('./abstract/Controller');
var MouseEvent          = require('./../event/MouseEvent');

function ProjectController ( id ) {
  Controller.call(this, id);
}

ProjectController.prototype = Object.create(Controller.prototype, {
  constructor: ProjectController
})

ProjectController.instance = null;
ProjectController.getInstance = function ( id ){
    if( !ProjectController.instance ){
        ProjectController.instance = new ProjectController( id );
    }
    return ProjectController.instance;
}

ProjectController.prototype.create = function () {
  Controller.prototype.create.call(this);
  // console.log( '[ProjectController] create' );

  this.container = $(this.view).find('.container');
  this.header = $(this.view).find('.container .text-view');
  this.button_back = $(this.view).find('.back p');
  this.updateSize();

  return this;
}

ProjectController.prototype.init = function () {
  Controller.prototype.init.call(this);
  Controller.prototype.show.call(this);
  // console.log('STATE',this.state);
  // console.log('LANGUAGE',this.language);
  // console.log( '[ProjectController] init' );

  $(this.button_back).bind(MouseEvent.CLICK, this.button_back_CLICK.bind(this));
  $(this.button_back).bind(MouseEvent.TOUCH_END, this.button_back_CLICK.bind(this));

  return this;
}

ProjectController.prototype.open = function () {
  // console.log( '[ProjectController] open' );
    // this.view.scrollTop(0);

    TweenMax.fromTo( this.container, 0.1, {x: '-75%'}, {x: '0%', ease: Cubic.easeInOut } );
    TweenMax.fromTo( this.view, 0.1, {x: '100%'}, {x: '0%', ease: Cubic.easeInOut } )
    TweenMax.fromTo( this.view, .6, {opacity: 0}, {opacity: 1, ease: Cubic.easeOut, delay: 0.2, onComplete: this.onOpen.bind(this) } )

    return this;
}

ProjectController.prototype.onOpen = function () {
  // console.log( '[ProjectController] onOpen' );
    this.dispatchEvent(Controller.EVENT.OPEN);

    return this;
}

ProjectController.prototype.close = function () {
  // console.log( '[ProjectController] close' );
    TweenMax.to( this.view, .6, {opacity: 0, ease: Cubic.easeOut, delay: 0.2, onComplete: this.onClose.bind(this) } )

    return this;
}

ProjectController.prototype.onClose = function () {
  // console.log( '[ProjectController] onClose' );
  TweenMax.to( this.container, 0.1, {x: '-75%', ease: Cubic.easeInOut } );
  TweenMax.to( this.view, 0.1, {x: '100%', ease: Cubic.easeInOut } )
  this.dispatchEvent(Controller.EVENT.CLOSE);

  window.application.scroll.enableEvents();

  return this;
}

ProjectController.prototype.dispose = function () {
    // console.log( '[ProjectController] dispose' );
    Controller.prototype.dispose.call(this);
    Controller.prototype.hide.call(this);

    return this;
}

ProjectController.prototype.updateLanguage = function () {
    // console.log( '[ProjectController] updateLanguage', this.view );
}

ProjectController.prototype.updateSize = function () {
    // console.log( '[ProjectController] updateSize', this.view );
    this.view.height( window.innerHeight );
    this.header.height( window.innerHeight );
}

ProjectController.prototype.button_back_CLICK = function ( event ) {
  this.close();
}

module.exports = ProjectController