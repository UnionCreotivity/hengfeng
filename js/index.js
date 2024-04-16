window.onload = function () {

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    var window_width = window.innerWidth;
    var window_height = window.innerHeight;

    // swiper
    if (window_width <= 1024) {
        const swiper = new Swiper(".card3-swiper", {
            loop: true,
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
            autoplay: {
                delay: 2500,
            },
            navigation: {
                prevEl: ".prev",
                nextEl: ".next"
            },

            on: {
                slideChange: function () {
                    const index_currentSlide = this.realIndex;
                    const banner_text = document.querySelectorAll('.banner-text');

                    banner_text.forEach((text, index) => {
                        text.style.opacity = index === index_currentSlide ? 1 : 0;
                    });
                },
            },
        });
    } else {
        const swiper = new Swiper(".card3-swiper", {
            centeredSlides: true,
            effect: "coverflow",
            loop: true,
            slidesPerView: "2",
            slidesOffsetBefore: 0,
            coverflowEffect: {
                slideShadows: true,
                rotate: 0,
                stretch: 0,
                depth: 100,
                outerWidth: 200,
                modifier: 6,
            },

            navigation: {
                prevEl: ".prev",
                nextEl: ".next"
            },
            autoplay: {
                delay: 2500,
            },
            on: {
                slideChange: function () {
                    const index_currentSlide = this.realIndex;
                    const banner_text = document.querySelectorAll('.banner-text');

                    banner_text.forEach((text, index) => {
                        text.style.opacity = index === index_currentSlide ? 1 : 0;
                    });
                },
            },
        });
    }

    // swiper
    if (window_width <= 1024) {
        const swiper4 = new Swiper(".card4-swiper-moblie", {
            loop: true,
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
            autoplay: {
                delay: 2200,
            },
            navigation: {
                prevEl: ".c4-prev",
                nextEl: ".c4-next"
            },

            on: {
                slideChange: function () {
                    const index_currentSlide = this.realIndex;
                    const banner_text = document.querySelectorAll('.text-wrap .item');

                    banner_text.forEach((text, index) => {
                        text.style.opacity = index === index_currentSlide ? 1 : 0;
                    });
                },
            },
        });
    }

    // swiper
    if (window_width <= 1024) {
        const swiper5 = new Swiper(".card5-swiper-moblie", {
            loop: true,
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
            autoplay: {
                delay: 2200,
            },
            navigation: {
                prevEl: ".c5-prev",
                nextEl: ".c5-next"
            },

        });
    }

    // swiper
    if (window_width <= 1024) {
        const swiper6 = new Swiper(".card6-swiper", {
            loop: true,
            effect: "fade",
            fadeEffect: {
                crossFade: true,
            },
            autoplay: {
                delay: 2200,
            },
            navigation: {
                prevEl: ".c6-prev",
                nextEl: ".c6-next"
            },

        });
    }

    //跑數字
    const numItem = document.querySelector(".run-numbers-span-box");
    function countNumberAni(obj, end, start, duration) {
        let startTimestamp = null;


        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;

            const progress = Math.min(
                (timestamp - startTimestamp) / duration,
                1
            );

            obj.innerHTML = Math.floor(-progress * (start - end) + start);

            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };

        window.requestAnimationFrame(step);
    }

    $('body').css('overflow', 'hidden');
    function runNumberAni() {

        let text50 = gsap.utils.toArray(".run-number-done-50text");
        let split50 = text50.map(heading => new SplitText(heading, {
            type: "chars,words,lines", linesClass: "clip-text"
        }));
        let numberTl = gsap.timeline();
        numberTl
            .from(".run-numbers .number-logo", {
                opacity: 0, filter: 'blur(5px)',
                duration: 1,
                ease: "power1.inOut",
            })
            .from(".run-numbers .number-line", {
                opacity: 0, filter: 'blur(5px)',
                duration: 1,
                ease: "power1.inOut",
            }, '<')
            .from(".run-numbers-span-box", {
                filter: 'blur(10px)',
                opacity: 0,
                duration: 1,
                ease: "power1.inOut",
                backgroundPosition: '150%'
            }, '<0.3')

            .add(
                function () {
                    countNumberAni(numItem, 2024, 1972, 1400);
                },
            )
            .to(".run-numbers-span-box", {
                opacity: 0,
                duration: 1,
                ease: "power1.inOut",
            }, "+=1.5")
            .to(".run-numbers .number-logo", {
                opacity: 0,
                duration: 1,
                ease: "power1.inOut",
            }, '<')
            .to(".run-numbers .number-line", {
                opacity: 0,
                duration: 1,
                ease: "power1.inOut",
            }, '<')

            .to(".run-numbers-span-box", {
                display: 'none',
                duration: 0.5,
                ease: "power1.inOut",
            })

            .to(".run-number-done-number-logo", {
                opacity: 1,
                duration: 1,
                ease: "power1.inOut",
            }, '<-0.2')

            .to(".run-number-done-50text", {
                opacity: 1,
                duration: 1,
                ease: "power1.inOut",
            }, '<')
            .to(split50[0].chars, {
                opacity: 1,
                filter: 'blur(0px)',
                duration: 1,
                ease: "power1.inOut",
                stagger: {
                    each: 0.1,
                    from: 'start'
                }
            }, '<0.3')
            .to(".run-number-done-number-line", {
                opacity: 1,
                duration: 1,
                ease: "power1.inOut",
            }, '<0.5')
            .to(".run-numbers", {
                height: '0vh',
                opacity: 0,
                duration: 1.5,
                ease: "power2.inOut",
            }, "+=0.4")
            .to('body', {
                overflow: 'visible',
                duration: 1,
                ease: "power1.inOut",
            }, "<")
            .to(".run-numbers", {
                display: 'none',
                duration: 0.7,
                ease: "power1.inOut",
            }, "+=0.5")
            //c1
            .from('.logo-box', {
                duration: 1,
                opacity: 0,
                filter: 'blur(10px)',
                ease: "power2.in",
            }, '<-1')
            .from('.c1-logo-name,.c1-text,.c1-line', {
                duration: 1,
                y: 100,
                opacity: 0,
                ease: "power1.inOut",
                filter: 'blur(10px)',
                stagger: {
                    each: 0.15,
                    from: 'start'
                }
            }, '<')
            .from('.text-1,.text-2,.text-3', {
                duration: 1,
                y: 150,
                opacity: 0,
                ease: "power1.inOut",
                filter: 'blur(10px)',
                stagger: {
                    each: 0.1,
                    from: 'start'
                }
            }, '<0.3')
            .from('.logo-name-box', {
                duration: 1,
                y: 100,
                opacity: 0,
                filter: 'blur(10px)',
                ease: "power1.inOut",
            }, '<0.3')

    }
    runNumberAni();

    //card-1
    function c1Ani() {
        let tl = gsap.timeline({})
        tl
            .from('.logo-box', {
                duration: 1,
                opacity: 0,
                filter: 'blur(10px)',
                ease: "power2.in",
            })
            .from('.c1-logo-name,.c1-text,.c1-line', {
                duration: 1,
                y: 100,
                opacity: 0,
                ease: "power1.inOut",
                filter: 'blur(10px)',
                stagger: {
                    each: 0.15,
                    from: 'start'
                }
            }, '<')
            .from('.text-1,.text-2,.text-3', {
                duration: 1,
                y: 150,
                opacity: 0,
                ease: "power1.inOut",
                filter: 'blur(10px)',
                stagger: {
                    each: 0.1,
                    from: 'start'
                }
            }, '<0.3')
            .from('.logo-name-box', {
                duration: 1,
                y: 100,
                opacity: 0,
                filter: 'blur(10px)',
                ease: "power1.inOut",
            }, '<0.3')

        //

    }
    // c1Ani();

    //card-2
    function c2Ani() {
        if (window_width <= 1024) {
            let c2tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.card2',
                    start: "-45%",
                }
            });

            c2tl.from('.video-content .en-title,.video-content .zh-title,.video-content .content-moblie', {
                duration: 1,
                y: 60,
                opacity: 0,
                ease: "power1.inOut",
                filter: 'blur(10px)',
                stagger: {
                    each: 0.2,
                    from: 'start'
                }
            })
        }
        else if (window_width <= 1440) {
            let c2tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.card2',
                    start: "-55%",
                    end: '+=400',
                    scrub: 5,
                }
            });

            c2tl.from('.video-content .en-title,.video-content .zh-title,.video-content .content', {
                duration: 2,
                y: 120,
                opacity: 0,
                ease: "power1.inOut",
                filter: 'blur(10px)',
                stagger: {
                    each: 0.2,
                    from: 'start'
                }
            })
                .from('.down-arrow', {
                    duration: 2,
                    opacity: 0,
                    y: -120,
                    ease: "power1.inOut",
                }, '<')
        }

        else {
            let c2tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.card2',
                    start: "-50%",
                    end: '+=650',
                    scrub: 5,
                }
            });

            c2tl.from('.video-content .en-title,.video-content .zh-title,.video-content .content', {
                duration: 2,
                y: 150,
                opacity: 0,
                ease: "power1.inOut",
                filter: 'blur(10px)',
                stagger: {
                    each: 0.2,
                    from: 'start'
                }
            })
                .from('.down-arrow', {
                    duration: 2,
                    opacity: 0,
                    y: -150,
                    ease: "power1.inOut",
                }, '<0.85')

        }


    }
    c2Ani();

    // card-3
    function c3Ani() {

        if (window_width <= 1024) {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.card3',
                    start: "-50%",
                }
            });
            tl.from('.card3 .title-box .en-title,.card3 .title-box .zh-title-moblie', {
                duration: 1,
                y: 60,
                opacity: 0,
                ease: "power1.inOut",
                filter: 'blur(10px)',
                stagger: {
                    each: 0.2,
                    from: 'start'
                }
            })

            let tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.card3',
                    start: "-25%",
                }
            });

            tl2.from('.card3 .banner-text-box .banner-text .title, .card3 .banner-text-box .banner-text .contnet', {
                duration: 1,
                y: 60,
                opacity: 0,
                ease: "power1.inOut",
                filter: 'blur(10px)',
                stagger: {
                    each: 0.2,
                    from: 'start'
                }
            })
        }
        else {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.card3',
                    start: "-60%",

                }
            });
            tl.from('.card3 .title-box .en-title,.card3 .title-box .zh-title', {
                duration: 1,
                y: 150,
                opacity: 0,
                ease: "power1.inOut",
                filter: 'blur(10px)',
                stagger: {
                    each: 0.2,
                    from: 'start'
                }
            })

            let tl2 = gsap.timeline({
                scrollTrigger: {
                    trigger: '.card3',
                    start: "-25%",
                }
            });

            tl2.from('.card3 .banner-text-box .banner-text .title, .card3 .banner-text-box .banner-text .contnet', {
                duration: 1,
                y: 100,
                opacity: 0,
                ease: "power1.inOut",
                filter: 'blur(10px)',
                stagger: {
                    each: 0.2,
                    from: 'start'
                }
            })
        }


    }
    c3Ani();

    //空拍圖
    function aerialAni() {
        if (window_width <= 1024) {
            let imgTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.card4',
                    start: "-20%",
                }
            });
            imgTl.fromTo('.aerial-photo', {
                filter: "blur(10px) brightness(1.5)",
            }, {
                filter: "blur(0px) brightness(1)",
                duration: 1,
                ease: "power1.inOut"
            })

            //英文字
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.card4',
                    start: "-20%",
                    end: '+=300',
                    scrub: 5,
                }
            });

            tl.from('.always-forever', {
                opacity: 0,
                duration: 2,
                y: -150,
                ease: "power1.inOut",
            })
        }

        else {
            let imgTl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.card4',
                    start: "-20%",

                }
            });
            imgTl.fromTo('.aerial-photo', {
                filter: "blur(10px) brightness(1.5)",
            }, {
                filter: "blur(0px) brightness(1)",
                duration: 1,
                ease: "power1.inOut"
            })

            //英文字
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.card4',
                    start: "-15%",
                    // end: '+=100',
                    end: '+=1000',
                    scrub: 5,
                }
            });

            tl.from('.always-forever', {
                opacity: 0,
                duration: 2,
                y: -600,
                ease: "power1.inOut",
            })
        }


    }
    aerialAni();

    // card-4
    function c4Ani() {
        if (window_width <= 1024) {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.card4',
                    start: "30%",
                }
            });
            tl.from('.img-open-text-box .text-wrap .item', {
                duration: 1,
                y: 60,
                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                    each: 0.15,
                    from: 'start'
                }
            }, '<')
        } else {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.card4',
                    start: "30%",
                }
            });
            tl.from('.img-open-text-box .text-wrap .item', {
                duration: 1,
                y: 150,
                opacity: 0,
                ease: "power1.inOut",
                stagger: {
                    each: 0.15,
                    from: 'start'
                }
            }, '<')
        }
    }
    c4Ani()

    // card-5
    function c5Ani() {

        if (window_width <= 1024) {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.card5',
                    start: "-45%",
                }
            });
            tl.from('.card5 .title-box .en-title,.card5 .title-box .zh-title,.card5 .title-box .content-moblie,.card5 .img-box', {
                duration: 1,
                y: 60,
                opacity: 0,
                ease: "power1.inOut",
                filter: 'blur(10px)',
                stagger: {
                    each: 0.15,
                    from: 'start'
                }
            }, '<')
        } else {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.card5',
                    start: "-45%",
                }
            });
            tl.from('.card5 .title-box .en-title,.card5 .title-box .zh-title,.card5 .title-box .content', {
                duration: 1,
                y: 100,
                opacity: 0,
                ease: "power1.inOut",
                filter: 'blur(10px)',
                stagger: {
                    each: 0.15,
                    from: 'start'
                }
            }, '<')
        }

    }
    c5Ani()

    function c6Ani() {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: '.card6',
                start: "-40%",
            }
        });

        if (window_width <= 1024) {
            tl.from('.card6 .right-box .en-title,.card6 .right-box .zh-title,.card6 .right-box .content-moblie', {
                duration: 1,
                y: 60,
                opacity: 0,
                ease: "power1.inOut",
                filter: 'blur(10px)',
                stagger: {
                    each: 0.15,
                    from: 'start'
                }
            }, '<')
        } else {
            tl.from('.card6 .right-box .en-title,.card6 .right-box .zh-title,.card6 .right-box .content', {
                duration: 1,
                y: 100,
                opacity: 0,
                ease: "power1.inOut",
                filter: 'blur(10px)',
                stagger: {
                    each: 0.15,
                    from: 'start'
                }
            }, '<')
        }

    }
    c6Ani();

    function c6ScrollImgAni() {
        if (window_width > 1024) {
            var c6tl = gsap.timeline({
                scrollTrigger: {
                    trigger: '.card6',
                    pin: ".card6",
                    start: "top 8%",
                    end: "+=2500",
                    scrub: 1,
                }
            });

            c6tl.fromTo('.pin-img2',
                {
                    scale: 2.5,
                    filter: "blur(10px) brightness(2)"
                },
                {
                    filter: "blur(0px) brightness(1)",
                    duration: 1,
                    opacity: 1,
                    scale: 1,
                    autoAlpha: 1,
                    ease: "power2.inOut",
                })
                .fromTo('.pin-img3',
                    {
                        scale: 2.5,
                        filter: "blur(10px) brightness(2)"
                    },
                    {
                        filter: "blur(0px) brightness(1)",
                        duration: 1,
                        opacity: 1,
                        scale: 1,
                        autoAlpha: 1,
                        ease: "power2.inOut",
                    })
                .fromTo('.pin-img4',
                    {
                        scale: 2.5,
                        filter: "blur(10px) brightness(2)"
                    },
                    {
                        filter: "blur(0px) brightness(1)",
                        duration: 1,
                        opacity: 1,
                        scale: 1,
                        autoAlpha: 1,
                        ease: "power2.inOut",
                    })
        }
    }
    c6ScrollImgAni();

    function map() {

        let map = document.querySelector('.aerial');
        let percentage = 50;
        let containerWidth = map.scrollWidth - map.clientWidth;
        let scrollPosition = (percentage / 100) * containerWidth;
        map.scrollLeft = scrollPosition;

    }
    map();
    //空拍手指消失
    function closeHandImgMap() {
        const box = document.querySelector(".aerial")
        const hand = document.querySelector(".arrow-container")
        let startX = null;
        box.addEventListener('touchstart', function (e) {
            startX = e.touches[0].pageX;
            hand.style.display = 'none';
        });
    }
    closeHandImgMap();
}