$(document).ready(function(){
	 $('.homepage-slides').owlCarousel({
      	items:1,
      	loop:true,
      	nav:true,
      	navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
      	autoPlay:false,
    });


	     var gd_sl_active = $('.gd-sl-active');
    gd_sl_active.owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        margin: 30,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
        navElement: 'div',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            767: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });




	 //counter
	   $('.counter').countUp({
		      'time': 1500,
		      'delay': 10
		  });



       // Menu


    $(".mainmenu-area li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");

    });


});