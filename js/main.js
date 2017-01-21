;(function(){

	var $body = $('body');
	
	$(document).ready(function(){

		$(document).on('click', '.nav-toggle', function(event) {
			event.preventDefault();

			if ( $body.hasClass('js-nav-open') ) {
				$body.removeClass('js-nav-open');

				enableScrolling();
				
			} else {
				$body.addClass('js-nav-open');

				disableScrolling();
			}			
		}); //end click

		$(document).on('click', '.nav__close', function(event) {
			event.preventDefault();
			
			$body.removeClass('js-nav-open');

			enableScrolling();
		}); // end click

		$body.on('click', function(event) {
			event.preventDefault();
			
			if( $body.hasClass('js-nav-open') ) {
				$body.removeClass('js-nav-open');

				enableScrolling();
			}
		});
		
	}); // end ready

	$(window).load(function(){

	 	var windowHeight = $(window).height();

        $('.nav__list').mCustomScrollbar({
        	setHeight: windowHeight,
        	autoHideScrollbar: true,
        	theme: 'inset-2'
        });
    }); // end load

    $(window).resize(function(event) {

    	if( $body.hasClass('js-nav-open') ) {
			$body.removeClass('js-nav-open');
			
			enableScrolling();
		}
    }); // end resize

	function disableScrolling(){
	    var x=window.scrollX;
	    var y=window.scrollY;
	    window.onscroll=function(){window.scrollTo(x, y);};
	}

	function enableScrolling(){
	    window.onscroll=function(){};
	}
})();
