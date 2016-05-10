function CustomScroll ( min, max ) {
  this.wheelEvent = this.isEventSupported('mousewheel') ? 'mousewheel' : 'wheel';
  this.limits = { min: min, max: max };
  // this.increment = (this.isMac()) ? 0.1 : 1;
  this.increment = 0;

  this.init();
}

CustomScroll.EVENT = {
  MOVE: 'CUSTOM_SCROLL_MOVE',
};

CustomScroll.prototype = {
  wheelEvent: null,
  limits: null,
  increment: null,
  incrementDefaulf: null,
  position: 0,
  scroll: 0,
  gesture: 0,
  percent: 0,
  enable: false,
  scrolling : false,
  events : true,
  delta: 0,
  gestureDelta: 0,
  direction: 0,

    init: function () {
      this.incrementDefaulf = this.increment;
      $(window).on( this.wheelEvent, this.move.bind(this) );
      $(window).bind('touchstart', this.touchstart.bind(this));
      $(window).bind('touchend', this.touchend.bind(this));
      $(window).bind('touchmove', this.touchmove.bind(this));

      window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
                window.webkitRequestAnimationFrame ||
                window.mozRequestAnimationFrame    ||
                function( callback ){
                  window.setTimeout(callback, 1000 / 60);
                };
      })();

      if( Modernizr.touchevents ){
        this.animate();
      }
    },

    disableEvents : function () {
      this.events = false;
    },

    enableEvents : function () {
      this.events = true;
    },

    setPosition: function ( position ) {
      this.position = position;
    },

    update: function () {
      $(this).trigger({type: CustomScroll.EVENT.MOVE})
    },

    setScrollAnimation: function ( speed, position, ease ) {
        if( !ease ){
          ease = Cubic.easeInOut;
        }

        this.position = position;
        this.position = ( this.position < this.limits.min ) ? this.limits.min : this.position;
        this.position = ( this.position > this.limits.max ) ? this.limits.max : this.position;

        TweenLite.killTweensOf(this);
        TweenLite.to(this, speed, {scroll: this.position, ease: ease, onUpdate: function(){ 
          this.percent = ((this.position * 100) / this.limits.max);
          $(this).trigger({type: CustomScroll.EVENT.MOVE}) }.bind(this)
        });
    },

    touchstart: function ( e ) {
      if(this.events){
        if(this.enable){
          this.gesture = e.originalEvent.touches[0].clientY;
          this.gestureDelta = 0;
        }
        e.originalEvent.preventDefault();
      }
    },

    touchend: function ( e ) {
      if(this.events){
        if(this.enable){
        
        }
        e.originalEvent.preventDefault();
        this.scrolling = false;
      }
    },

    touchmove: function ( e ) {
      if( this.events ){
        if(this.enable){
          
          var gesture = e.originalEvent.touches[0].clientY;
          var divisor = 100;

          var distance = 0;
          
          
          if( gesture > this.gesture ){
            this.direction = -1;
            distance += (gesture - this.gesture) / 10;
            distance += Math.pow(distance, 2);
            this.gestureDelta += -(distance);
          } else if ( gesture < this.gesture ) {
            this.direction = 1;
            distance += (this.gesture - gesture) / 10;
            distance += Math.pow(distance, 2);
            this.gestureDelta += (distance);
          }

          this.gesture = e.originalEvent.touches[0].clientY;
        }

        this.scrolling = true;
        e.originalEvent.preventDefault();
      }
    },

    move: function ( event ) {
      if(this.events){
        event.preventDefault();

        if(this.enable){
          var oEvent = event.originalEvent;
          var delta = oEvent.deltaY || oEvent.wheelDelta;

          if(this.isMac()){

            var newDelta = delta / 100;
            newData = Math.pow( newDelta, 2 );
            if( delta > 0 ){
              this.increment = newDelta;
            } else if (delta < 0){
              this.increment = -(newDelta);
            }

          } else {

            var newDelta =  (this.isFirefox()) ? delta : delta / 40;
            if( delta > 0 ){
              this.increment = newDelta;
            } else if (delta < 0){
              this.increment = -(newDelta);
            }            
          }

          if( this.isIE() ){
            if(delta > 0) { this.position -= this.increment } else if ( delta < 0 ) { this.position += (this.increment) }
          } else {
            if(delta > 0) { this.position += this.increment } else if ( delta < 0 ) { this.position -= (this.increment) }
          }

          this.position = ( this.position < this.limits.min ) ? this.limits.min : this.position;
          this.position = ( this.position > this.limits.max ) ? this.limits.max : this.position;

          TweenLite.killTweensOf(this);
          TweenLite.to(this, this.isMac() ? 0.3 : 0.5, {scroll: this.position, onUpdate: function(){ 
            this.percent = ((this.position * 100) / this.limits.max);
            $(this).trigger({type: CustomScroll.EVENT.MOVE}) }.bind(this)
          });
        }
      }
    },

    isEventSupported: function (eventName) {
      var el = document.createElement('div');
      eventName = 'on' + eventName;
      var isSupported = (eventName in el);
      if (!isSupported) {
          el.setAttribute(eventName, 'return;');
          isSupported = typeof el[eventName] == 'function';
      }
      el = null;
      return isSupported;
  },

  isMac: function () {
    return navigator.platform.toUpperCase().indexOf('MAC')>=0;
  },

  isTablet: function () {
    return ( window.innerWidth >= 768 ) ? true : false;
  },

  isIE: function () {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    return (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./));
  },

  isFirefox: function () {
    var validation = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
    return validation;
  },

  animate: function () {
    this.render_UPDATE();
  },

  render_UPDATE: function () {
    this.updateRender();
    requestAnimFrame(this.render_UPDATE.bind(this));
  },

  updateRender: function () {
    // console.log(this.gestureDelta);

    var newGestureDelta;
    var finalGestureDelta;
    
    if( this.direction == 1 ){
      newGestureDelta = (this.gestureDelta / 20);
      this.gestureDelta -= newGestureDelta;
      finalGestureDelta = ((this.gestureDelta - 1) / 100);
      finalGestureDelta = ( finalGestureDelta <= 0 ) ? 0 : finalGestureDelta;
      this.position += (finalGestureDelta);
    } else if ( this.direction == -1 ) {
      newGestureDelta = (this.gestureDelta / 20);
      this.gestureDelta -= newGestureDelta - 0.1;
      finalGestureDelta = ((this.gestureDelta - 1) / 100);
      finalGestureDelta = ( finalGestureDelta >= 0 ) ? 0 : finalGestureDelta;
      this.position += (finalGestureDelta);
    }

    this.position = ( this.position < this.limits.min ) ? this.limits.min : this.position;
    this.position = ( this.position > this.limits.max ) ? this.limits.max : this.position;

    this.scroll = this.position;
    this.percent = ((this.position * 100) / this.limits.max);
    $(this).trigger({type: CustomScroll.EVENT.MOVE});
  },
}

module.exports = CustomScroll