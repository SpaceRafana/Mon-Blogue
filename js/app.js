$(document).ready(function () {
    //icon menu
    $(".icon-menu button").on("click", function () {
        $(".nav-links ul").toggleClass("open");
        $(".nav-links .icon-menu i").toggleClass("fa-arrow-right").toggleClass("fa-ellipsis-h");
    });
    //---------

    /*scroll to top*/

    $(window).on('scroll', function (){
        scroll = $(window).scrollTop();
        if (scroll >= 100){
            $("#back-to-top").addClass('b-show_scrollBut');
        }else{
            $("#back-to-top").removeClass('b-show_scrollBut');
        }
    });
    $("#back-to-top").on("click", function(){
        $('body,html').animate({
            scrollTop: 0,
        }, 100);
    });

    //------------------

    //liste menu and mobile
    var $slide = $("#slide"),
        $ul = $(".nav-links ul"),
        $icon_menu = $(".nav-links .icon-menu i"),
        $btnRetourAccueil = $(".portfolio .retour-accueil button"),
        $mAccueil = $("#menu-accueil"),
        $mArticle = $("#menu-article");

    $(".presentation button").on("click", function () {
        $slide.addClass("in").removeClass("out");
    });

    $btnRetourAccueil.on("click", function () {
        $slide.removeClass("in").addClass("out");
    });

    $(".nav-links #menu-article").on("click", function () {
        $slide.removeClass("in").addClass("out");
        $ul.toggleClass("open");
        //icon change
        $icon_menu.toggleClass("fa-arrow-right").toggleClass("fa-ellipsis-h");

        //menu active
        $mArticle.addClass("active");
        $mAccueil.removeClass("active");

    });

    //---------

    //animation accueil
    $(".accueil .presentation .bonjour").each(function () {
        $(this).delay(200).fadeToggle(1000);
    });
    $(".accueil .presentation .moi").each(function () {
        $(this).delay(1000).animate({opacity: 1, top: 0}, 1000);
    });
    $(".accueil .presentation h2").each(function () {
        $(this).css({top: 5})
        $(this).delay(2000).animate({opacity: "100%", top: 0 }, 1000);
    });
    //---------

    /*box article*/
    $('.box').on('mouseenter', function () {
        $(this).parent().prev().children(".cercle").addClass("cercle-open");
    }).on('mouseleave', function () {
        $('.cercle').removeClass("cercle-open");
    });
    //-------------

    $('.ligne-y').each(function () {
        $(this).delay(100).animate({height: 30}, 800);
    })

});