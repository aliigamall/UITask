$(document).ready(function(){

    // Slider Height

    const winH = $(window).height();

    $("header, header .carousel__carousel-inner--item").height(winH);

    // News Tabs

    $("#change-tab li").click(function(){
        $(this).siblings().removeClass("active");
        $(this).addClass("active");

        $('#border-active .border-space__seprated').toggleClass("active")
    });


    // ScrollTop Button

    $(window).scroll(function(){

        if($(window).scrollTop() > 500)
            $(".scroll-top").show()
        else
            $(".scroll-top").hide()
            
    });

    $('.scroll-top').click(function () {
        $("html, body").animate({
          scrollTop: 0
        }, 500);
          return false;
      });
    
    
})
