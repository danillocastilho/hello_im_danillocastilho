function isEventSupported(eventName) {
    var el = document.createElement('div');
    eventName = 'on' + eventName;
    var isSupported = (eventName in el);
    if (!isSupported) {
        el.setAttribute(eventName, 'return;');
        isSupported = typeof el[eventName] == 'function';
    }
    el = null;
    return isSupported;
}

var _isMac;
var _isIE;

function isMac () {
  if(!_isMac){
    _isMac = navigator.platform.toUpperCase().indexOf('MAC')>=0;
  }
  return _isMac;
}

function isIE() {
  if(!_isIE){
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)){
      _isIE = true;
    } else {
      _isIE = false;
    }

  }

  return _isIE;
}

function ScrollWhell ( xMinAndMaxScroll, yMinAndMaxScroll, callback ) {
  this.callback = callback;
  this.wheelEvent = isEventSupported('mousewheel') ? 'mousewheel' : 'wheel';
  this.rulers = {x: xMinAndMaxScroll, y: yMinAndMaxScroll };
  this.increment = (isMac()) ? 0.1 : 1;
  this.position = {x: xMinAndMaxScroll.min, y: yMinAndMaxScroll.min};
  this.enable = true;
  this.animated_position = {x: 0, y: 0};

  $(window).on(this.wheelEvent, function(e) {
      e.preventDefault();
      if(!this.enable){
        return;
      }

      var oEvent = e.originalEvent,
          delta  = oEvent.deltaY || oEvent.wheelDelta;

      if( isIE() ){

        if(delta > 0) {
          this.position.y -= this.increment;
        } else if ( delta < 0 ) {
          this.position.y += this.increment;
        }

      } else {

        if(delta > 0) {
          this.position.y += this.increment;
        } else if ( delta < 0 ) {
          this.position.y -= this.increment;
        }

      }
      
      this.position.y = ( this.position.y < this.rulers.y.min ) ? this.rulers.y.min : this.position.y;
      this.position.y = ( this.position.y > this.rulers.y.max ) ? this.rulers.y.max : this.position.y;

      TweenLite.to(this.animated_position, (isMac()) ? 0.6 : 1, {x: this.position.x, y: this.position.y, onUpdate: function(e){
        callback.call( {} );
      }});
      
  }.bind(this));
}