	$(document).ready(function(){
  		$(window).resize(function(){
			    var footerHeight = $('.regfooter').outerHeight();
			    var stickFooterPush = $('.newpush').height(footerHeight);
		
    			$('.push').css({'marginBottom':'-' + footerHeight + 'px'});
		    });
		
    		$(window).resize();
	    });
