$(document).ready(function(){
   //aos (animated on scroll)
   AOS.init()
   
   
    //navbar togging
    $('#navbar-toggler').click(function(){
    $('.navbar-collapse').slideToggle();
    
    });
    // navbar background
    $(window).scroll(function(){
    let position = $(window).scrollTop();
    if(position > 80){
        $(".navbar").addClass('bg-navbar');
    }else {
       $('.navbar').removeClass('bg-navbar'); 
    }
    
    });
    
    });

    //GSAP
    gsap.from(".nav-brand-toggler",{opacity:0,duration:1,delay:0.5, y:-10});
    gsap.from(".call-info",{opacity:0,duration:1 ,delay:1, x:20});
    gsap.from(".btn btn-top",{opacity:0,duration:1,delay:1.5, x:-200});
    gsap.from(".container h2",{opacity:0,duration:1,delay:2, y:-50});
    gsap.from(".container h1",{opacity:0,duration:1,delay:2.5, y:-45});
    gsap.from(".btn",{opacity:0,duration:1,delay:3, y:-30});
    gsap.from(".hero a",{opacity:0,duration:1,delay:3.5, y:10});
    gsap.from(".nav-item",{opacity:0,
        duration:1,
        delay:1.2, 
        y:30,
        stagger:0.2});
        gsap.from(".icon span",{opacity:0,
            duration:1,
            delay:4, 
            x:-30,
            stagger:0.2});
//smooth scroll
let links = $('.navbar-nav a.nav-link');
links.click(function(e){
e.preventDefault();
let target = $(this).attr('href');
$('html,body').stop().animate({
scrollTop: $(target).offset().top},700);
});






    //popup gallery

    $(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});
//slick slider
$('.testimonial-slider').slick({
dots: true,
infinite: true,
autoplay: true,
speed: 300,
slidesToShow: 1,
adaptiveHeights: true



});
