function Timeline () {
    this.init();
}


Timeline.instance = null;
Timeline.getInstance = function (){
    if( !Timeline.instance ){
        Timeline.instance = new Timeline();
    }
    return Timeline.instance;
}

Timeline.prototype.init = function () {
    this.timeline = new TimelineMax({paused: true});
}

Timeline.prototype.get = function () {
    return this.timeline;
}

Timeline.prototype.add = function ( tween, delay ) {
    this.timeline.add( tween, delay );
}

Timeline.prototype.duration = function () {
    return this.timeline.duration();
}

module.exports = Timeline