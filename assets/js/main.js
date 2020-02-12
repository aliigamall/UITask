$(document).ready(function(){
    const winH = $(window).height();

    $("header, header .carousel__carousel-inner--item").height(winH);

    $(window).scroll(function(){

        if($(window).scrollTop() > 500)
            $(".scroll-top").show()
        else
            $(".scroll-top").hide()
            
    })

    $('.scroll-top').click(function () {
        $("html, body").animate({
          scrollTop: 0
        }, 500);
          return false;
      });
    
    
})
