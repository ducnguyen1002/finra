$(function () {

    // ------------ team images width same height -----------
    // var images = $(".tc-team-style1 .team-card .img, .img_sm_h");
    // images.each(function () {
    //   var width = $(this).width();
    //   $(this).height(width);
    // });


});


// ------------ swiper sliders -----------
$(document).ready(function () {

    // ------------ header-slider -----------
    var swiper = new Swiper('.tc-services-st1 .services-slider', {
        slidesPerView: 4,
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
            }
        }
    });

    // ------------ tc-services-st1 -----------
    var swiper = new Swiper('.tc-services-st1 .services-slider', {
        slidesPerView: 4,
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
            }
        }
    });


    // ------------ tc-blog-st4 -----------
    // var swiper = new Swiper('.tc-blog-st4 .posts-slider', {
    //     // slidesPerView: 3,
    //     spaceBetween: 20,
    //     // centeredSlides: true,
    //     speed: 1500,
    //     // pagination: {
    //     //     el: '.tc-blog-st4 .swiper-pagination',
    //     //     clickable: true,
    //     // },
    //     navigation: false,
    //     mousewheel: false,
    //     keyboard: false,
    //     autoplay: {
    //         delay: 5000,
    //     },
    //     loop: false,
    //     breakpoints: {
    //         0: {
    //             slidesPerView: 1,
    //         },
    //         480: {
    //             slidesPerView: 1,
    //         },
    //         787: {
    //             slidesPerView: 2,
    //         },
    //         991: {
    //             slidesPerView: 2,
    //         },
    //         1200: {
    //             slidesPerView: 3,
    //         }
    //     }
    // });


    // ------------ tc-testimonials-st1 -----------
    var swiper = new Swiper('.tc-testimonials-st1 .testi-slider', {
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

    // ------ cases colmns effect ------

    // -------
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".tc-video-st1",
            start: "-700 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl1.to(".tc-video-st1 .img img", {
        x: 0,
        y: 0,
        scale: 1.15,
        duration: 15,
        ease: "linear",
        delay: 1
    });


    // -------
    const tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".tc-about-st1",
            start: "-700 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl2.to(".tc-about-st1 .float-imgs", {
        x: 0,
        y: -150,
        scale: 1,
        duration: 15,
        ease: "linear",
        delay: 1
    });


    // -------
    const tl3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".tc-portfolio-st1",
            start: "-700 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl3.to(".tc-portfolio-st1 .project-card .img img", {
        x: 0,
        y: 0,
        scale: 1.15,
        duration: 15,
        ease: "linear",
        delay: 1
    });


});

// quản lí ẩn hiện content theo ngày - tháng/ quý
document.querySelectorAll('.button-group .button').forEach((button, index) => {
    button.addEventListener('click', () => {
        // Xóa class active khỏi tất cả các button và content
        document.querySelectorAll('.button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));

        // Thêm class active vào button và content tương ứng
        button.classList.add('active');
        document.querySelector(`.content-${index}`).classList.add('active');
    });
});

