$( document ).ready( function() {

	$('.js-is-visible').isVisible({
		//'offset': 500,
		//'offsetBottom' : 100,
		//'offsetRight' : 150,
	});

	$('.js-is-visible').on( 'isVisible', function( event, visiblePart, scrollDirectionY, scrollDirectionX  ) {

		if ( visiblePart == "y") {
			console.log('Vis:' + visiblePart);
			//console.log('Y:' + scrollDirectionY);
			//console.log('X:' + scrollDirectionX);
		}

	});

});