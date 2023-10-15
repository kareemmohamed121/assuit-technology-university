var map;
$(document).ready(function() {
    $('.flexslider').flexslider({
        animation: "fade"
    });
    
    $('#news-carousel').carousel({interval: false});
    $('#videos-carousel').carousel({interval: false});
    $('#testimonials-carousel').carousel({interval: 6000, pause: "hover"});
    $('#awards-carousel').carousel({interval: false});
    
    $('#flickr-photos').jflickrfeed({
        limit: 12,
        qstrings: {
        id: '138784770@N07'
        },
        itemTemplate:
            '<li>' +
            '<a href="{{image}}" title="{{title}}" target="_blank">' +
            	'<img src="{{image_s}}" alt="{{title}}" />' +
            '</a>' +
            '</li>'
    });

    $('li.dropdown-submenu > a.trigger').on('click', function(e) {
        var current=$(this).next();
		current.toggle();
		e.stopPropagation(); 
		e.preventDefault(); 
		if (current.is(':visible')) {
    		$(this).closest('li.dropdown-submenu').siblings().find('ul.dropdown-menu').hide();
		}
    });   
      
    $('.card-toggle').on('click', function () {
      if ($(this).find('svg').attr('data-icon') == 'plus-square' ) {
        $(this).find('svg').attr('data-icon', 'minus-square');
      } else {
        $(this).find('svg').attr('data-icon', 'plus-square');
      };
    });  



});
	