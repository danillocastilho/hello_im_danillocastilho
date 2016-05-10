var Controller          = require('./abstract/Controller');
var MouseEvent          = require('./../event/MouseEvent');

var ProjectController   = require('./ProjectController');

function WorkController ( id ) {
  Controller.call(this, id);
}

WorkController.prototype = Object.create(Controller.prototype, {
  constructor: WorkController
})

WorkController.prototype.create = function () {
  Controller.prototype.create.call(this);
  // console.log( '[WorkController] create' );

  return this;
}

WorkController.prototype.init = function () {
  Controller.prototype.init.call(this);
  Controller.prototype.show.call(this);
  // console.log('STATE',this.state);
  // console.log('LANGUAGE',this.language);
  // console.log( '[WorkController] init' );

  this.project = ProjectController.getInstance();
  this.project_view = false;
  this.project.addEventListener( Controller.EVENT.CLOSE, this.project_CLOSE.bind(this) );

  this.points = [];
  this.texts = this.view[0].children[0].children;
  var view, text, thumb, button, tween, delay, interval;
  delay = this.timeline.duration() - 3;

  this.timeline.add( TweenMax.to( this.view, 0.1, {y: '0%', ease: Linear.easeNone} ), delay + (0 * 3) );

  for ( var i = 0; i < this.texts.length; i++ ) {
    view          = this.texts[i];
    thumb         = view.children[0];
    text          = view.children[1];
    title         = view.children[2];
    button        = title.children[1];

    this.timeline.add( TweenMax.fromTo( view, 3, {y: '100%', opacity: 0.5}, {opacity: 1, y: '0%', scale: 1, ease: Linear.easeNone} ), delay + (i * 3) );
    this.timeline.add( TweenMax.fromTo( thumb, 3, {y: '-75%', opacity: 0.2}, {opacity: 1, y: '0%', ease: Linear.easeNone} ), delay + (i * 3) );
    this.timeline.add( TweenMax.fromTo( title, 3, {y: '-50%'}, {y: '0%', ease: Linear.easeNone} ), delay + (i * 3) );

    this.points[this.points.length] = this.timeline.duration();

    this.timeline.add( TweenMax.to( view, 3, {opacity: 1, y: '-100%', scale: 1, ease: Linear.easeNone} ), delay + (i * 3) + 3 );
    this.timeline.add( TweenMax.to( thumb, 3, {opacity: 0.2, y: '75%', ease: Linear.easeNone} ), delay + (i * 3) + 3 );
    this.timeline.add( TweenMax.to( title, 3, {y: '50%', ease: Linear.easeNone} ), delay + (i * 3) + 3 );
    // this.timeline.add( TweenMax.to( text, 3, {opacity: 0, y: '75%', ease: Linear.easeNone} ), delay + (i * 3) + 3 );

    // this.timeline.add( TweenMax.to( view, 2, {opacity: 0, rotationY: '0deg', ease: Linear.easeNone} ), delay + (i * 4) + 3 );
    // this.timeline.add( TweenMax.to( thumb, 1, {opacity: 0, ease: Linear.easeNone} ), delay + (i * 4) + 5 );
    // this.timeline.add( TweenMax.to( thumb, 2, {ease: Linear.easeNone} ), delay + (i * 4) + 3 );

    if( button ){
      $(button.children[0]).attr('data-index', i);
      $(button.children[0]).bind( MouseEvent.CLICK, this.project_CLICK.bind(this) );
      $(button.children[0]).bind( MouseEvent.TOUCH_END, this.project_CLICK.bind(this) );
    }
  }

  this.timeline.add( TweenMax.to( this.view, 0.1, {y: '-100%'} ), this.timeline.duration() );

  return this;
}

WorkController.prototype.open = function () {
  // console.log( '[WorkController] open' );
    TweenMax.to( this.view, .6, {opacity: 1, ease: Cubic.easeOut, onComplete: this.onOpen.bind(this) } )

    return this;
}

WorkController.prototype.onOpen = function () {
  // console.log( '[WorkController] onOpen' );
    this.dispatchEvent(Controller.EVENT.OPEN);

    return this;
}

WorkController.prototype.close = function () {
  // console.log( '[WorkController] close' );
    TweenMax.to( this.view, .6, {opacity: 0, ease: Cubic.easeOut, onComplete: this.onClose.bind(this) } )

    return this;
}

WorkController.prototype.onClose = function () {
  // console.log( '[WorkController] onClose' );
    this.dispatchEvent(Controller.EVENT.CLOSE);

    return this;
}

WorkController.prototype.dispose = function () {
    // console.log( '[WorkController] dispose' );
    Controller.prototype.dispose.call(this);
    Controller.prototype.hide.call(this);

    return this;
}

WorkController.prototype.updateLanguage = function () {
    // console.log( '[WorkController] updateLanguage', this.view );
}

WorkController.prototype.updateSize = function () {
    // console.log( '[WorkController] updateSize', this.view );
}

WorkController.prototype.project_CLICK = function(event) {
  if(!window.application.scroll.scrolling){
    if(!this.project_view){
      var button = event.currentTarget;
      var index = parseInt($(button).attr('data-index'));
      var delayToOpen = 0.5;

      window.application.scroll.disableEvents();
      window.application.scroll.setScrollAnimation(delayToOpen, this.points[index], Cubic.easeInOut);

      TweenMax.to( this, delayToOpen, {onComplete: function(){
        this.project.open();  
      }.bind(this) } )

      this.project_view = true;
    }
  }
}

WorkController.prototype.project_CLOSE = function ( event ) {
  this.project_view = false;
}

module.exports = WorkController