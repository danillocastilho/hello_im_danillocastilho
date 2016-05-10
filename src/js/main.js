var Application = require('./application/Application');

function init () {
	window.application = new Application();
}

$(document).ready( function(){
	init();
});
