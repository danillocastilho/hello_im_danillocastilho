var GA = function () {
	
}

GA.debug = function () {
	// return true;
	return false;
}

GA.trackPage = function ( page ) {
	if(GA.debug()){ console.log('[GA] - trackPage - ' + page) }
	return ga('send', 'pageview', page);
}

GA.trackEvent = function ( category, action, label ) {
	if(GA.debug()){ console.log('[GA] - trackEvent - ' + category + '/' + action + '/' + label ) }
	return ga('send', 'event', category, action, label);
}

GA.trackCustom = function ( category, action ) {
	if(GA.debug()){ console.log('[GA] - trackEvent - ' + category + '/' + action ) }
	return ga('set', category, action);
}
