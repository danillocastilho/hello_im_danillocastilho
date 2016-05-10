var MouseEvent = {
	CLICK: (Modernizr.touchevents) ? '' : 'click',
	MOUSE_DOWN: (Modernizr.touchevents) ? '' : 'mousedown',
	MOUSE_UP: (Modernizr.touchevents) ? '' : 'mouseup',
	MOUSE_MOVE: (Modernizr.touchevents) ? '' : 'mousemove',
	TOUCH_END: (Modernizr.touchevents) ? 'touchend' : '',
	TOUCH_START: (Modernizr.touchevents) ? 'touchstart' : '',
	TOUCH_MOVE: (Modernizr.touchevents) ? 'touchmove' : '',
	OVER: (Modernizr.touchevents) ? '' : 'mouseenter',
	OUT: (Modernizr.touchevents) ? '' : 'mouseleave',
}

module.exports = MouseEvent;