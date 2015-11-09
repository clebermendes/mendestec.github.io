/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 100)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })
	
	$('#botao').bind('click', function(event) {
        var img = $('#img').attr('src');
		var src = 'img/btn_menos.png';
		var src2 = 'img/btn_mais.png';
		
		if(img == src2)
		{
			$('#info').show(500);
			$('#info2').show(1000);
			$('#img').attr('src','img/btn_menos.png').show("slow");
		}else
		{
			$('#info').hide(1000);
			$('#info2').hide(500);
			$('#img').attr('src','img/btn_mais.png').show("slow");
		}
		event.preventDefault();
    });
    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
