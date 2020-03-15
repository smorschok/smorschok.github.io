$(document).ready(function(){
    $('.slider').slick({
        arrows:true,
        dots:true,
        slidesToShow:3,
        speed:1000,
        touchThreshold:20,
        centerMode:true,
        variableWidth:false,
        focusOnSelect: true,
        responsive:[
            {
				breakpoint: 1500,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 1100,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});
