var Controller          = require('./abstract/Controller');

function ContactController ( id ) {
  Controller.call(this, id);
}

ContactController.prototype = Object.create(Controller.prototype, {
  constructor: ContactController
})

ContactController.prototype.create = function () {
  Controller.prototype.create.call(this);
  // console.log( '[ContactController] create' );

  return this;
}

ContactController.prototype.init = function () {
  Controller.prototype.init.call(this);
  Controller.prototype.show.call(this);
  // console.log('STATE',this.state);
  // console.log('LANGUAGE',this.language);
  // console.log( '[ContactController] init' );

  this.texts = this.view[0].children[0].children;
  var text, tween, delay;
  delay = this.timeline.duration() - 1;

  this.timeline.add( TweenMax.to( this.view, 0.1, {y: '0%', ease: Linear.easeNone} ), delay + (0 * 3) );

  for ( var i = 0; i < this.texts.length; i++ ) {
    text = this.texts[i];
    this.timeline.add( TweenMax.fromTo( text, 0.1, {y: '-100%'}, {y: '0%', ease: Linear.easeNone} ), delay + (i * 2) );
    this.timeline.add( TweenMax.to( text, 2, {opacity: 1, scale: 1, ease: Linear.easeNone} ), delay + (i * 2) );
    if( i < this.texts.length - 1 ){
      this.timeline.add( TweenMax.to( text, 2, {opacity: 0, scale: 1.5, y: -50, rotationX: '45deg', ease: Linear.easeNone} ), delay + (i * 2) + 2 );
      this.timeline.add( TweenMax.to( text, 2, {y: '-100%', ease: Linear.easeNone} ), delay + (i * 2) + 2 + 2 );
    }
  }

  return this;
}

ContactController.prototype.open = function () {
  // console.log( '[ContactController] open' );
    TweenMax.to( this.view, .6, {opacity: 1, ease: Cubic.easeOut, onComplete: this.onOpen.bind(this) } )

    return this;
}

ContactController.prototype.onOpen = function () {
  // console.log( '[ContactController] onOpen' );
    this.dispatchEvent(Controller.EVENT.OPEN);

    return this;
}

ContactController.prototype.close = function () {
  // console.log( '[ContactController] close' );
    TweenMax.to( this.view, .6, {opacity: 0, ease: Cubic.easeOut, onComplete: this.onClose.bind(this) } )

    return this;
}

ContactController.prototype.onClose = function () {
  // console.log( '[ContactController] onClose' );
    this.dispatchEvent(Controller.EVENT.CLOSE);

    return this;
}

ContactController.prototype.dispose = function () {
    // console.log( '[ContactController] dispose' );
    Controller.prototype.dispose.call(this);
    Controller.prototype.hide.call(this);

    return this;
}

ContactController.prototype.updateLanguage = function () {
    // console.log( '[ContactController] updateLanguage', this.view );
}

ContactController.prototype.updateSize = function () {
    // console.log( '[ContactController] updateSize', this.view );
}

module.exports = ContactController