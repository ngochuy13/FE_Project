var Page = (function() {

	var bb,
		$navNext = $( '#bb-nav-next' ),
		$navPrev = $( '#bb-nav-prev' ),
		transEndEventNames = {
			'WebkitTransition': 'webkitTransitionEnd',
			'MozTransition': 'transitionend',
			'OTransition': 'oTransitionEnd',
			'msTransition': 'MSTransitionEnd',
			'transition': 'transitionend'
		},
		transEndEventName = transEndEventNames[Modernizr.prefixed('transition')],
		supportTransitions = Modernizr.csstransitions;

	function init() {

		// initialize jScrollPane on the content div of the first item
		// setJSP( 'init' );
		bb = $( '#bb-bookblock' ).bookblock( {
			speed : 800,
			perspective : 2000,
			shadowSides	: 0.8,
			shadowFlip	: 0.4,
			startPage : 1,
		} );
		initEvents();

	}
	
	function initEvents() {

		// add navigation events
		$navNext.on( 'click', function() {
			bb.next();
			return false;
		} );

		$navPrev.on( 'click', function() {
			bb.prev();
			return false;
		} );
	}
	return { init : init };

})();
