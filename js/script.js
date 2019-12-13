jQuery(document).ready(function(){



// index code
	
	//Adding the X button
	jQuery(".ui-message").append('<span class="ui-close">X</span>');
	
	//Handling the click event
	jQuery(".ui-close").click(function(){
		jQuery(this).parents(".ui-message").fadeOut();
	})

	//
	jQuery(".answer").hide();

	//handling the FAQ question click
	jQuery(".faq h4").css('color','blue');

	jQuery(".faq h4").click(function(){

		jQuery(this).next(".answer").slideToggle();
		jQuery(this).css('color','red');

	});


	jQuery("#about").click(function(){
		jQuery(".about-placeholder").load("about.html .container")
		return false;
	});  
// index code

jQuery.fn.revealOnScroll = function(){

}// 



	jQuery(".example-photo").css("opacity", 0);

	jQuery(window).scroll(function(){

		var windowHeight = jQuery(window).height();

		var windowScrollPosTop = jQuery(window).scrollTop();

		var windowScrollPosBottom = windowHeight + windowScrollPosTop;
		
	jQuery(".status").html(windowScrollPosBottom);
		
		var objectOffset = jQuery(".example-photo").offset();

		var objectOffsetTop = objectOffset.top;

	jQuery(".imgPos").html(objectOffsetTop);

		if (!jQuery(".example-photo").hasClass('animaiton-complete')) {

	        if (windowScrollPosBottom >= objectOffsetTop){
	            jQuery(".example-photo").animate({opacity:1}, 3000).addClass('animaiton-complete');
	            TweenMax.to("#obj", 0.5, {x:200, width:200});
	        }
	    }
	});



});