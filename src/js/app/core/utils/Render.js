window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function Render ( callback ) {
	this.interval = 0;
  this.currentTime = 0;
  this.rendering = true;
  this.callback = (callback) ? callback : null;

  this.init = function () {
      this.loop();
  };
  this.loop = function () {
  	if(this.callback){
  		this.callback.call(this);
  	}
  	this.interval++;
		this.currentTime = ( this.interval / 60 );
  	window.requestAnimFrame( function(){ this.loop(); }.bind(this) );
  }
  return this;
}