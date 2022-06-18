$(document).ready(function(){
    
    $('.navbar-burger').on('click',function(){
        $('.navbar-end').slideToggle(200);
        $('.navbar-end').css('display', 'flex');
    })
    // ------------------------------------------ //
    // details //
    // ------------------------------------------ //

    $('#details .owl-carousel').owlCarousel({
        responsive:{
            0:{
                items: 1.1
            },
            769:{
                items: 1
            }
        },
        nav: true,
        margin:32,
        loop: true,

    });
    // ------------------------------------------ //
    // feature //
    // ------------------------------------------ //

    // $('.features-btns').on('click', function (e) {
    //     let focusItem = e.target.id;
    //     let subs = focusItem.split('-');
    //     subs[0] = '#box';
    //     let focusBox = subs.join('-');
    //     $(focusBox).show(300);
    // });
    // $('#features .btn-close').on('click', function (e) {
    //     let focusBox = "#" + e.target.parentNode.id;
    //     console.log(focusBox)
    //     $(focusBox).hide(500);
    // });
    // tent
    $('#btn-tent').on('click',function(){
        $('#box-tent').show(300);
    })
    $('.btn-close-tent').on('click',function(){
        $('#box-tent').hide(500);
    })
    $('#box-tent .owl-carousel').owlCarousel({
        responsive:{
            0:{
                items: 1.1
            }
        },
        nav: true,
        margin:32,
        loop: true,
    });
    // cargobox
    $('#btn-cargobox').on('click',function(){
        $('#box-cargobox').show(300);
    })
    $('.btn-close-cargobox').on('click',function(){
        $('#box-cargobox').hide(500);
    })
    $('#box-cargobox .owl-carousel').owlCarousel({
        responsive:{
            0:{
                items: 1.1
            }
        },
        nav: true,
        margin:32,
        loop: true,
    });
    // mobile
    $('#btn-mobile').on('click',function(){
        $('#box-mobile').show(300);
    })
    $('.btn-close-mobile').on('click',function(){
        $('#box-mobile').hide(500);
    })
    $('#box-mobile .owl-carousel').owlCarousel({
        responsive:{
            0:{
                items: 1.1
            }
        },
        nav: true,
        margin:32,
        loop: true,
    });
    // soslight
    $('#btn-soslight').on('click',function(){
        $('#box-soslight').show(300);
    })
    $('.btn-close-soslight').on('click',function(){
        $('#box-soslight').hide(500);
    })
    $('#box-soslight .owl-carousel').owlCarousel({
        responsive:{
            0:{
                items: 1.1
            }
        },
        nav: true,
        margin:32,
        loop: true,
    });

    // ------------------------------------------ //
    // engineering //
    // ------------------------------------------ //
    $('#engineering .owl-carousel').owlCarousel({
        responsive:{
            0:{
                items: 1.1
            },
            769:{
                items: 1
            }
        },
        nav: true,
        margin:32,
        loop: true,

    });

    
    ScrollReveal().reveal('.js-FadeInBottom',{
        origin: 'bottom',
        distance: '50px',
        delay: 200,
        duration: 1000,
        reset: true,
        // interval: 300,
    })
    ScrollReveal().reveal('.js-FadeInBottom-slow',{
        origin: 'bottom',
        distance: '50px',
        delay: 400,
        duration: 1200,
        reset: true,
    })
    ScrollReveal().reveal('.js-FadeInLeft',{
        origin: 'left',
        distance: '50px',
        delay: 200,
        duration: 1000,
        reset: true,
        // interval: 200,
    })
    ScrollReveal().reveal('.js-FadeInLeft-slow',{
        origin: 'left',
        distance: '50px',
        delay: 400,
        duration: 1200,
        reset: true,
    })
    ScrollReveal().reveal('.js-FadeInRight',{
        origin: 'right',
        distance: '1500px',
        delay: 0,
        duration: 1200,
        reset: true,
    })
    ScrollReveal().reveal('.js-FadeInRight-slow',{
        origin: 'right',
        distance: '1500px',
        delay: 400,
        duration: 1200,
        reset: true,
    })
    // no-reset
    ScrollReveal().reveal('.js-FadeInBottom-no_reset',{
        origin: 'bottom',
        distance: '50px',
        delay: 200,
        duration: 1000,
        reset: false,

    })
    ScrollReveal().reveal('.js-FadeInBottom-slow-no_reset',{
        origin: 'bottom',
        distance: '50px',
        delay: 400,
        duration: 1200,
        reset: false,
    })
    ScrollReveal().reveal('.js-FadeInLeft-no_reset',{
        origin: 'left',
        distance: '50px',
        delay: 200,
        duration: 1000,
        reset: false,
        // interval: 200,
    })
    ScrollReveal().reveal('.js-FadeInLeft-slow-no_reset',{
        origin: 'left',
        distance: '50px',
        delay: 400,
        duration: 1200,
        reset: false,
    })
    ScrollReveal().reveal('.js-FadeInRight-no_reset',{
        origin: 'right',
        distance: '50px',
        delay: 200,
        duration: 800,
        reset: false,
    })
    ScrollReveal().reveal('.js-FadeInRight-no_reset',{
        origin: 'right',
        distance: '50px',
        delay: 200,
        duration: 800,
        reset: false,
    })
})

if ($(window).width()  < 1201 ) {
    $(".js-FadeInLeft").removeClass('js-FadeInLeft');
    $(".js-FadeInLeft-slow").removeClass('js-FadeInLeft-slow');
    $(".1200-FadeInBottom").addClass('js-FadeInBottom');
    $(".1200-FadeInBottom-slow").addClass('js-FadeInBottom-slow');
    $(".add-pd").addClass('pd-left15em')

    // landpage
    $(".jumbotron-bg img").attr("src", "./productpage__assets/images/hero/landingpage/1200/landpage1200.png"); 

    // banner
    $("#banner-pic-top").attr("src", "productpage__assets/images/styling/sty1200/sty-top-1200.png"); 

}

if ($(window).width()  < 769 ) {

    // landpage
    $(".jumbotron-bg img").attr("src", "./productpage__assets/images/hero/landingpage/768/landpage768.png"); 

    // banner
    $("#banner-pic-top").attr("src", "productpage__assets/images/styling/576/1.png"); 
    // banner
    $("#banner-pic-down").attr("src", "productpage__assets/images/styling/576/2.png"); 


    $(".add-pd").removeClass('pd-left15em')
}


// ------------------------------------------ //
// footer //
// ------------------------------------------ //
$('.contactus').on('click',function(){
    $('.contact-center').slideToggle(300);
})

