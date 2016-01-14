var _isTablet;

function isTablet () {
  if(!_isTablet){
    _isTablet = ( window.innerWidth >= 768 ) ? true : false;
  }

  return _isTablet;
}

function ScrollGesture ( xMinAndMaxScroll, yMinAndMaxScroll, callback ) {

  this.callback = callback;
  this.rulers = {x: xMinAndMaxScroll, y: yMinAndMaxScroll };
  this.increment = 0.1;
  this.divisor = ( isTablet() ) ? 20 : 15;
  this.position = {x: 0, y: 0};
  this.gesture = {x: 0, y: 0};
  this.animated_position = {x: 0, y: 0};
  this.enable = true;

  $(window).bind('touchstart', function( e ){
    this.gesture.x = e.originalEvent.touches[0].clientX;
    this.gesture.y = e.originalEvent.touches[0].clientY;
  }.bind(this));

  $(window).bind('touchend', function( e ){
    
  }.bind(this));

  $(window).bind('touchmove', function( e ){
    e.preventDefault();
    
    if(!this.enable){
      return;
    }

    var gesture = {x: e.originalEvent.touches[0].clientX, y: e.originalEvent.touches[0].clientY};

    if( gesture.y > this.gesture.y ){
      this.position.y -= (gesture.y - this.gesture.y) / this.divisor;
    } else if ( gesture.y < this.gesture.y ) {
      this.position.y += (this.gesture.y - gesture.y) / this.divisor;
    }

    this.position.y = ( this.position.y < this.rulers.y.min ) ? this.rulers.y.min : this.position.y;
    this.position.y = ( this.position.y > this.rulers.y.max ) ? this.rulers.y.max : this.position.y;

    TweenLite.to(this.animated_position, 1, {x: this.position.x, y: this.position.y, onUpdate: function(e){
        callback.call( {} );
    }});

    this.gesture.x = e.originalEvent.touches[0].clientX;
    this.gesture.y = e.originalEvent.touches[0].clientY;
  }.bind(this));

}