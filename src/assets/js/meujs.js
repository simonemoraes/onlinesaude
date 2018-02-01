$(document).ready( function(){

    $('#carouselHacked').carousel();

    /* o códgigo para o mapa */
    var map = new GMaps({
        el: '#map',
        lat: -12.043333,
        lng: -77.028333
    });

    $('#home').click( function(){
       $('html, body').animate({scrollTop: $('.home').offset().top -20}, 1000)
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
    });
    $('#produtos').click( function(){
       $('html, body').animate({scrollTop: $('.produtos').offset().top -50}, 1000)
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
    });
    $('#planos').click( function(){
        $('html, body').animate({scrollTop: $('.planos').offset().top -50}, 1000)
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
    });
    $('#contato').click( function(){
        $('html, body').animate({scrollTop: $('.contato').offset().top -50}, 1000)
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
    });

//this code is for smooth scroll and nav selector


    /* código para animação da nav */
    $(window).scroll( function () {
        var windowScrollPosTop = $(window).scrollTop();

        if(windowScrollPosTop >= 150){
            $(".header").css({
                "background": "#B193DD",
            });
            $(".top-header img.logo").css({
                "margin-top": "-40px",
                "margin-bottom": "0"
            });
            $(".navbar-default").css({
                "margin-top": "-15px",
            });
        }else{
            $(".header").css({
                "background": "transparent",
            });
            $(".top-header img.logo").css({
                "margin-top": "-15px",
                "margin-bottom": "25px"
            });
            $(".navbar-default").css({
                "margin-top": "12px",
                "margin-bottom": "0"
            });
        }
    });


});