$(document).ready(function(){

    // Slider & Search Height

    const winH = $(window).height();

    $("header, header .carousel__carousel-inner--item, .search-page").height(winH);

    // Search show-hide

    $("#search-icon").click(function(){
        $("#search-page").show()
    });

    $("#close-search").click(function(){
        $("#search-page").hide()
    });

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
