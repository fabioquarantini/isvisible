//! jQuery isVisible v1.0.0 - Fabio Quarantini - www.fabioquarantini.com

;( function( $, window, document, undefined ) {

	$.fn.isVisible = function( settings ) {

		var defaults = {
			showClass: true,
			removeClass: true,
			offset: 0,
			offsetTop: 0,
			offsetBottom: 0,
			offsetLeft: 0,
			offsetRight: 0,
			classXY: 'is-visible',
			classX: 'is-visible-x',
			classY: 'is-visible-y',
			classTop: 'is-visible-top',
			classBottom: 'is-visible-bottom',
			classLeft: 'is-visible-left',
			classRight: 'is-visible-right',
			dataName: 'is-visible-offset',
			dataNameTop: 'is-visible-offset-top',
			dataNameBottom: 'is-visible-offset-bottom',
			dataNameLeft: 'is-visible-offset-left',
			dataNameRight: 'is-visible-offset-right'
		};

		var selector = this.selector;
		var scrollTimeout;
		var viewportObject = $( window );
		var lastScrollTop = 0;
		var lastScrollLeft = 0;
		var firstView = true;
		var scrollDirectionX;
		var scrollDirectionY;

		$.extend( defaults, settings );

		// Shim layer with setTimeout fallback
		window.animationFrame = ( function ( callback ) {

			return window.requestAnimationFrame || function ( callback ) {

				window.setTimeout( callback, 1000/60 );

			};

		})();

		viewportObject.scroll( function () {

			if ( scrollTimeout ) {
				// clear the timeout, if one is pending
				clearTimeout( scrollTimeout );
				scrollTimeout = false;
			} else {
				scrollTimeout = true;
				animationFrame( scrollHandler );
			}

		});

		var scrollHandler = function () {

			var viewportHeight = viewportObject.height();
			var viewportWidth = viewportObject.width();
			var viewportTop = viewportObject.scrollTop();
			var viewportBottom = viewportTop + viewportHeight;
			var viewportLeft = viewportObject.scrollLeft();
			var viewportRight = viewportLeft + viewportWidth;

			// Get scroll direction
			if (!firstView) {

				if ( viewportTop > lastScrollTop ) {
					scrollDirectionY = "down";
				} else {
					scrollDirectionY = "up";
				}

				if ( viewportLeft < lastScrollLeft ) {
					scrollDirectionX = "left";
				} else {
					scrollDirectionX = "right";
				}

			}

			firstView = false;
			lastScrollTop = viewportTop;
			lastScrollLeft = viewportLeft;

			$(selector).each( function() {

				var $currentElement = $(this);
				var elHeight = $currentElement.height();
				var elWidth = $currentElement.width();
				var elPosition = $currentElement.offset();
				var elPositionTop = elPosition.top;
				var elPositionLeft = elPosition.left;
				var elPositionRight = elPositionLeft + elWidth;
				var elPositionBottom = elPositionTop + elHeight;

				// Top
				var offsetTop = $currentElement.data( defaults.dataNameTop ) || $currentElement.data( defaults.dataName ) || defaults.offsetTop || defaults.offset || 0;
				offsetTop = parseInt(offsetTop);
				var isTopVisible = elPositionTop - offsetTop <= viewportBottom && elPositionTop - offsetTop >= viewportTop;
				if (isTopVisible) {
					$currentElement.trigger('isVisible', [ 'top', scrollDirectionY, scrollDirectionX ] );
					if ( defaults.showClass && !$(this).hasClass(defaults.classTop)) {
						$(this).addClass( defaults.classTop );
					}
				} else {
					if ( defaults.showClass && defaults.removeClass && $(this).hasClass(defaults.classTop)  ) {
						$(this).removeClass( defaults.classTop );
					}
				}

				// Bottom
				var offsetBottom = $currentElement.data( defaults.dataNameBottom ) || $currentElement.data( defaults.dataName ) || defaults.offsetBottom || defaults.offset || 0;
				offsetBottom = parseInt(offsetBottom);
				var isBottomVisible = elPositionBottom + offsetBottom <= viewportBottom && elPositionBottom + offsetBottom >= viewportTop;
				if (isBottomVisible) {
					$currentElement.trigger('isVisible', [ 'bottom', scrollDirectionY, scrollDirectionX ] );
					if ( defaults.showClass && !$(this).hasClass(defaults.classBottom) ) {
						$(this).addClass( defaults.classBottom );
					}
				} else {
					if ( defaults.showClass && defaults.removeClass && $(this).hasClass(defaults.classBottom) ) {
						$(this).removeClass( defaults.classBottom );
					}
				}

				// Left
				var offsetLeft = $currentElement.data( defaults.dataNameLeft ) || $currentElement.data( defaults.dataName ) || defaults.offsetLeft || defaults.offset || 0;
				offsetLeft = parseInt(offsetLeft);
				var isLeftVisible = elPositionLeft - offsetLeft >= viewportLeft && elPositionLeft - offsetLeft <= viewportRight;
				if (isLeftVisible) {
					$currentElement.trigger('isVisible', [ 'left', scrollDirectionY, scrollDirectionX ] );
					if ( defaults.showClass && !$(this).hasClass(defaults.classLeft) ) {
						$(this).addClass( defaults.classLeft );
					}
				} else {
					if ( defaults.showClass && defaults.removeClass && $(this).hasClass(defaults.classLeft)  ) {
						$(this).removeClass( defaults.classLeft );
					}
				}

				// Right
				var offsetRight = $currentElement.data( defaults.dataNameRight ) || $currentElement.data( defaults.dataName ) || defaults.offsetRight || defaults.offset || 0;
				offsetRight = parseInt(offsetRight);
				var isRightVisible = elPositionRight + offsetRight <= viewportRight && elPositionRight + offsetRight >= viewportLeft;
				if (isRightVisible) {
					$currentElement.trigger('isVisible', [ 'right', scrollDirectionY, scrollDirectionX ] );
					if ( defaults.showClass && !$(this).hasClass(defaults.classRight) ) {
						$(this).addClass( defaults.classRight );
					}
				} else {
					if ( defaults.showClass && defaults.removeClass && $(this).hasClass(defaults.classRight) ) {
						$(this).removeClass( defaults.classRight );
					}
				}

				// X
				var inViewX = isLeftVisible && isRightVisible;
				if (inViewX) {
					$currentElement.trigger('isVisible', [ 'x', scrollDirectionY, scrollDirectionX ] );
					if ( defaults.showClass && !$(this).hasClass(defaults.classX) ) {
						$(this).addClass( defaults.classX );
					}
				} else {
					if ( defaults.showClass && defaults.removeClass && $(this).hasClass(defaults.classX) ) {
						$(this).removeClass( defaults.classX );
					}
				}

				// Y
				var inViewY = isTopVisible && isBottomVisible;
				if (inViewY) {
					$currentElement.trigger('isVisible', [ 'y', scrollDirectionY, scrollDirectionX ] );
					if ( defaults.showClass && !$(this).hasClass(defaults.classY)  ) {
						$(this).addClass( defaults.classY );
					}
				} else {
					if ( defaults.showClass && defaults.removeClass && $(this).hasClass(defaults.classY) ) {
						$(this).removeClass( defaults.classY );
					}
				}

				// XY
				var inView = isTopVisible && isBottomVisible && isLeftVisible && isRightVisible;
				if (inView) {
					$currentElement.trigger('isVisible', [ 'xy', scrollDirectionY, scrollDirectionX ] );
					if ( defaults.showClass && !$(this).hasClass(defaults.classXY) ) {
						$(this).addClass( defaults.classXY );
					}
				} else {
					if ( defaults.showClass && defaults.removeClass && $(this).hasClass(defaults.classXY) ) {
						$(this).removeClass( defaults.classXY );
					}
				}

			});

		};

		viewportObject.load( function() {
			scrollHandler();
		});

		viewportObject.resize( function() {
			scrollHandler();
		});

	};

})( jQuery, window, document );