var Controller          = require('./abstract/Controller');

function AboutController ( id ) {
  Controller.call(this, id);
}

AboutController.prototype = Object.create(Controller.prototype, {
  constructor: AboutController
})

AboutController.prototype.create = function () {
  Controller.prototype.create.call(this);
  // console.log( '[AboutController] create' );

  return this;
}

AboutController.prototype.init = function () {
  Controller.prototype.init.call(this);
  Controller.prototype.show.call(this);
  // console.log('STATE',this.state);
  // console.log('LANGUAGE',this.language);
  // console.log( '[AboutController] init' );

  this.texts = this.view[0].children[0].children;
  var text, tween, delay;
  delay = this.timeline.duration();

  text = this.texts[0];
  $(text).css('opacity', 0);
  TweenMax.to( text, .6, {opacity: 1, ease: Linear.easeNone, delay: 1} )
  this.timeline.add( TweenMax.to( text, 1, {scale: 1, opacity: 0, ease: Linear.easeNone}), delay );

  for ( var i = 0; i < this.texts.length; i++ ) {
    text = this.texts[i];
    var index = i;

    if( i == 0 ){
      this.timeline.add( TweenMax.to( text, 2, {opacity: 0, scale: 1.5, y: -50, rotationX: '45deg', ease: Linear.easeNone} ), delay + (index * 1) );
    } else {
      index = index - 1;
      this.timeline.add( TweenMax.fromTo( text, 0.1, {y: '-100%'}, {y: '0%', ease: Linear.easeNone} ), delay + (index * 1) );
      this.timeline.add( TweenMax.to( text, 2, {opacity: 1, scale: 1, ease: Linear.easeNone} ), delay + (index * 2) );
      this.timeline.add( TweenMax.to( text, 2, {opacity: 0, scale: 1.5, y: -50, rotationX: '45deg', ease: Linear.easeNone} ), delay + (index * 2) + 2 );
      this.timeline.add( TweenMax.to( text, 0.1, {y: '-100%', ease: Linear.easeNone} ), delay + (index * 2) + 2 + 2 );
    }
  }

  this.timeline.add( TweenMax.to( this.view, 0.1, {y: '-100%'} ), this.timeline.duration() );

  return this;
}

AboutController.prototype.open = function () {
  // console.log( '[AboutController] open' );
    TweenMax.to( this.view, .6, {opacity: 1, ease: Cubic.easeOut, onComplete: this.onOpen.bind(this) } )

    return this;
}

AboutController.prototype.onOpen = function () {
  // console.log( '[AboutController] onOpen' );
    this.dispatchEvent(Controller.EVENT.OPEN);

    return this;
}

AboutController.prototype.close = function () {
  // console.log( '[AboutController] close' );
    TweenMax.to( this.view, .6, {opacity: 0, ease: Cubic.easeOut, onComplete: this.onClose.bind(this) } )

    return this;
}

AboutController.prototype.onClose = function () {
  // console.log( '[AboutController] onClose' );
    this.dispatchEvent(Controller.EVENT.CLOSE);

    return this;
}

AboutController.prototype.dispose = function () {
    // console.log( '[AboutController] dispose' );
    Controller.prototype.dispose.call(this);
    Controller.prototype.hide.call(this);

    return this;
}

AboutController.prototype.updateLanguage = function () {
    // console.log( '[AboutController] updateLanguage', this.view );
}

AboutController.prototype.updateSize = function () {
    // console.log( '[AboutController] updateSize', this.view );
}

module.exports = AboutController