$(function () {

    // ------------ team images width same height -----------
    // var images = $(".tc-team-style1 .team-card .img, .img_sm_h");
    // images.each(function () {
    //   var width = $(this).width();
    //   $(this).height(width);
    // });

    $(document).on("change", ".file", function () {
        $(this)
            .parent()
            .find(".input_ques")
            .val(
                $(this)
                    .val()
                    .replace(/C:\\fakepath\\/i, "")
            );
    });


});


// ------------ swiper sliders -----------
$(document).ready(function () {

    // ------------ tc-services-st1 -----------
    var swiper = new Swiper('.tc-services-st1 .services-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 4,
            },
            1440: {
                slidesPerView: 5,
            }
        }
    });


    // ------------ tc-testimonials-st10 -----------
    var swiper = new Swiper('.tc-testimonials-st10 .testi-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });


    // ------------ marq-slider -----------
    var swiper = new Swiper('.tc-marq-sliders .slider', {
        slidesPerView: "auto",
        spaceBetween: 150,
        centeredSlides: true,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        speed: 20000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
        },
        loop: true,
    });


    // ------------ tc-services-slider1 -----------
    var swiper = new Swiper('.tc-services-st7 .services-slider', {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-services-st7 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


    // ------------ tc-testimonials-st8 -----------
    var swiper = new Swiper('.tc-testimonials-st8 .testi-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        // centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-testimonials-st8 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });


    // ------------ tc-header-slider1 -----------
    var swiper = new Swiper('.tc-capabilities-st5 .capabilities-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1500,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2.8,
            }
        }
    });


});



// ------------ gsap scripts -----------
$(function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
        content: "#scrollsmoother-container",
        smooth: 1.5,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
        //preventDefault: true,
        //ease: 'power4.out',
        //smoothTouch: 0.1, 
    });


});
