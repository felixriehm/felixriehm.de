$(document).ready(function () {

    function makeSVG(tag, attrs) {
        var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
        for (var k in attrs)
            el.setAttribute(k, attrs[k]);
        return el;
    }


    if (window.location.pathname.indexOf("about") >= 0 || $("#hero-left-text").length > 0) {
        var oval1 = $('#hero-oval-1'),
            oval2 = $('#hero-oval-2'),
            text1 = $('#hero-left-text'),
            text2 = $('#hero-right-text'),
            line = $('#curved-line'),
            oval1Mobile = $('#hero-oval-1-mobile'),
            oval2Mobile = $('#hero-oval-2-mobile'),
            text1Mobile = $('#hero-top-text-mobile'),
            text2Mobile = $('#hero-bottom-text-mobile'),
            lineMobile = $('#curved-line-mobile');

        if (window.matchMedia('(max-width: 768px)').matches) {
            var tlMobile = new TimelineLite();
            tlMobile.fromTo(oval1Mobile, 2, {
                    y: '70%',
                    autoAlpha: 0
                }, {
                    y: '0%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, 0)
                .fromTo(oval2Mobile, 2, {
                    y: '-70%',
                    autoAlpha: 0
                }, {
                    y: '0%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, 0)
                .fromTo(lineMobile, 2, {
                    rotation: -25,
                    transformOrigin: '50% 50%',
                    autoAlpha: 0
                }, {
                    rotation: 0,
                    transformOrigin: '50% 50%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, 0)
                .to(text2Mobile, 0.2, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.4')
                .to(text1Mobile, 0.2, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2')
                .to([oval1, oval2, text1, text2, line], 0, {
                    autoAlpha: 1
                });

        } else {
            var tl = new TimelineLite();
            tl.fromTo(oval1, 2, {
                    y: '70%',
                    autoAlpha: 0
                }, {
                    y: '0%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, 0)
                .fromTo(oval2, 2, {
                    y: '-70%',
                    autoAlpha: 0
                }, {
                    y: '0%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, 0)
                .fromTo(line, 2, {
                    rotation: -25,
                    transformOrigin: '50% 50%',
                    autoAlpha: 0
                }, {
                    rotation: 0,
                    transformOrigin: '50% 50%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, 0)
                .to(text2, 0.2, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.4')
                .to(text1, 0.2, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2')
                .to([oval1Mobile, oval2Mobile, text1Mobile, text2Mobile, lineMobile], 0, {
                    autoAlpha: 1
                });
        }
    }


    if (window.location.pathname.indexOf("social-social") >= 0 || window.location.pathname.indexOf("misc-misc") >= 0 || window.location.pathname.indexOf("web-and-design-web-and-design") >= 0) {

        var circles = $('[id="circle-item"] [id="circle"]').next().children().children().not(":empty").parent().parent().parent().parent();

        circles.hover(function () {
            $(this).children().children("#circle").addClass("circle-hover-js");
        }, function () {
            $(this).children().children("#circle").removeClass("circle-hover-js");
        });

        circles.each(function (i) {
            $(this).wrapAll(makeSVG('a', {
                href: $(this).find("#url").children().text()
            }));
        });


        var categoryItemDesktop1 = $('.category-item-desktop-1'),
            categoryItemDesktop2 = $('.category-item-desktop-2'),
            categoryItemDesktop3 = $('.category-item-desktop-3'),
            categoryItemDesktop4 = $('.category-item-desktop-4'),
            categoryItemDesktop5 = $('.category-item-desktop-5'),
            categoryItemDesktop6 = $('.category-item-desktop-6'),
            categoryItemDesktop7 = $('.category-item-desktop-7'),
            categoryItemDesktop8 = $('.category-item-desktop-8'),
            categoryItemTextDesktop1 = $('.category-item-text-desktop-1'),
            categoryItemTextDesktop2 = $('.category-item-text-desktop-2'),
            categoryItemTextDesktop3 = $('.category-item-text-desktop-3'),
            categoryItemTextDesktop4 = $('.category-item-text-desktop-4'),
            categoryItemTextDesktop5 = $('.category-item-text-desktop-5'),
            categoryItemTextDesktop6 = $('.category-item-text-desktop-6'),
            categoryItemTextDesktop7 = $('.category-item-text-desktop-7'),
            categoryItemTextDesktop8 = $('.category-item-text-desktop-8'),
            categoryTitleDesktop = $('.categoryTitleDesktop'),
            categoryItemMobile = $('.category-item-mobile'),
            categoryItemTextMobile = $('.category-item-text-mobile'),
            categoryTitleMobile = $('.categoryTitleMobile');

        if (window.matchMedia('(max-width: 768px)').matches) {
            var tl = new TimelineLite();
            tl.to(categoryTitleMobile, 0.4, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '+=0.4')
                .staggerFromTo(categoryItemMobile, 0.4, {
                    x: '-200%',
                    autoAlpha: 0
                }, {
                    x: '0%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, 0.2);

            var tl2 = new TimelineLite();
            tl2.staggerTo(categoryItemTextMobile, 0.4, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, 0.2, "+=1")
                .to([categoryItemDesktop1, categoryItemDesktop2, categoryItemDesktop3, categoryItemDesktop4, categoryItemDesktop5, categoryItemDesktop6, categoryItemDesktop7, categoryItemDesktop8, categoryItemTextDesktop1, categoryItemTextDesktop2, categoryItemTextDesktop3, categoryItemTextDesktop4, categoryItemTextDesktop5, categoryItemTextDesktop6, categoryItemTextDesktop7, categoryItemTextDesktop8], 0, {
                    autoAlpha: 1
                });
        } else {
            var tl = new TimelineLite();
            tl.fromTo(categoryItemDesktop1, 0.4, {
                    scale: 0,
                    transformOrigin: '50% 50%',
                    autoAlpha: 0
                }, {
                    scale: 1,
                    transformOrigin: '50% 50%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                })
                .fromTo(categoryItemDesktop2, 0.4, {
                    scale: 0,
                    transformOrigin: '50% 50%',
                    autoAlpha: 0
                }, {
                    scale: 1,
                    transformOrigin: '50% 50%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2')
                .fromTo(categoryItemDesktop3, 0.4, {
                    scale: 0,
                    transformOrigin: '50% 50%',
                    autoAlpha: 0
                }, {
                    scale: 1,
                    transformOrigin: '50% 50%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2')
                .fromTo(categoryItemDesktop4, 0.4, {
                    scale: 0,
                    transformOrigin: '50% 50%',
                    autoAlpha: 0
                }, {
                    scale: 1,
                    transformOrigin: '50% 50%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2')
                .fromTo(categoryItemDesktop5, 0.4, {
                    scale: 0,
                    transformOrigin: '50% 50%',
                    autoAlpha: 0
                }, {
                    scale: 1,
                    transformOrigin: '50% 50%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2')
                .fromTo(categoryItemDesktop6, 0.4, {
                    scale: 0,
                    transformOrigin: '50% 50%',
                    autoAlpha: 0
                }, {
                    scale: 1,
                    transformOrigin: '50% 50%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2')
                .fromTo(categoryItemDesktop7, 0.4, {
                    scale: 0,
                    transformOrigin: '50% 50%',
                    autoAlpha: 0
                }, {
                    scale: 1,
                    transformOrigin: '50% 50%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2')
                .fromTo(categoryItemDesktop8, 0.4, {
                    scale: 0,
                    transformOrigin: '50% 50%',
                    autoAlpha: 0
                }, {
                    scale: 1,
                    transformOrigin: '50% 50%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2');

            var tl2 = new TimelineLite();
            tl2.to(categoryItemTextDesktop1, 0.4, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '+=0.4')
                .to(categoryItemTextDesktop2, 0.4, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2')
                .to(categoryItemTextDesktop3, 0.4, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2')
                .to(categoryItemTextDesktop4, 0.4, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2')
                .to(categoryItemTextDesktop5, 0.4, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2')
                .to(categoryItemTextDesktop6, 0.4, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2')
                .to(categoryItemTextDesktop7, 0.4, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2')
                .to(categoryItemTextDesktop8, 0.4, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2')
                .to(categoryTitleDesktop, 0.4, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                })
                .to([categoryItemMobile, categoryItemTextMobile, categoryTitleMobile], 0, {
                    autoAlpha: 1
                });
        }
    }



    if (window.location.pathname.indexOf("social") >= 0 || window.location.pathname.indexOf("misc") >= 0 || window.location.pathname.indexOf("web-and-design") >= 0) {
        $('.slider-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            dots: false,
            centerMode: true,
            autoplay: true,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 786,
                    settings: {
                        slidesToShow: 2
                    }
                }
              ]
        });

        $('[id="cloud-btn-mobile"]').hover(function () {
            $(this).children("#cloud").addClass("back-btn-mobile-cloud-hover-js");
            $(this).children("#back").addClass("back-btn-mobile-text-hover-js");
        }, function () {
            $(this).children("#cloud").removeClass("back-btn-mobile-cloud-hover-js");
            $(this).children("#back").removeClass("back-btn-mobile-text-hover-js");
        });

        $('[id="cloud-btn-desktop"]').hover(function () {
            $(this).children("#cloud").addClass("back-btn-desktop-cloud-hover-js");
            $(this).children("#back").addClass("back-btn-desktop-text-hover-js");
        }, function () {
            $(this).children("#cloud").removeClass("back-btn-desktop-cloud-hover-js");
            $(this).children("#back").removeClass("back-btn-desktop-text-hover-js");
        });

        var urlText = $('[id="cloud-btn-desktop"]').parent().find("#back-url").children().text();

        $("#cloud-btn-desktop").wrapAll(makeSVG('a', {
            href: urlText.toString()
        }));

        $("#cloud-btn-mobile").wrapAll(makeSVG('a', {
            href: urlText.toString()
        }));

        var heroItemCircleDesktop = $('#hero-item-circle-desktop'),
            heroItemItemTitleDesktop = $('.hero-item-itemTitle-desktop'),
            heroItemItemSubTitleDesktop = $('.hero-item-itemSubTitle-desktop'),
            heroItemItemTagseDesktop = $('.hero-item-itemTags-desktop'),
            heroItemLineDesktop = $('#hero-item-line-desktop'),
            cloudDesktop = $('.cloud-desktop'),
            cloudTextDesktop = $('.cloud-text-desktop'),
            heroItemCircleMobile = $('#hero-item-circle-mobile'),
            heroItemItemTitleMobile = $('.hero-item-itemTitle-mobile'),
            heroItemItemSubTitleOneMobile = $('.hero-item-itemSubTitleOne-mobile'),
            heroItemItemSubTitleTwoMobile = $('.hero-item-itemSubTitleTwo-mobile'),
            heroItemItemTagseMobile = $('.hero-item-itemTags-mobile'),
            heroItemLineMobile = $('#hero-item-line-mobile'),
            cloudMobile = $('.cloud-mobile'),
            cloudTextMobile = $('.cloud-text-mobile');

        if (window.matchMedia('(max-width: 768px)').matches) {
            var tlMobile = new TimelineLite();
            tlMobile.fromTo(heroItemCircleMobile, 1, {
                    x: '-100%',
                    autoAlpha: 1
                }, {
                    x: '0%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                })
                .fromTo(cloudMobile, 0.5, {
                    x: '100%',
                    autoAlpha: 0
                }, {
                    x: '0%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.5')
                .to(heroItemItemTitleMobile, 0.1, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                })
                .to([heroItemItemSubTitleOneMobile, heroItemItemSubTitleTwoMobile], 0.1, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.1')
                .to(heroItemLineMobile, 0.1, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2')
                .to(heroItemItemTagseMobile, 0.1, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                })
                .to(cloudTextMobile, 0.1, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.1')
                .to([heroItemCircleDesktop, heroItemItemTitleDesktop, heroItemItemSubTitleDesktop, heroItemItemTagseDesktop, heroItemLineDesktop, cloudDesktop, cloudTextDesktop], 0, {
                    autoAlpha: 1
                });

        } else {
            var tl = new TimelineLite();
            tl.fromTo(heroItemCircleDesktop, 1, {
                    y: '100%',
                    autoAlpha: 1
                }, {
                    y: '0%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                })
                .fromTo(cloudDesktop, 0.5, {
                    x: '-100%',
                    autoAlpha: 0
                }, {
                    x: '0%',
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.5')
                .to(heroItemItemTitleDesktop, 0.1, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                })
                .to(heroItemItemSubTitleDesktop, 0.1, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.1')
                .to(heroItemLineDesktop, 0.1, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.2')
                .to(heroItemItemTagseDesktop, 0.1, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                })
                .to(cloudTextDesktop, 0.1, {
                    autoAlpha: 1,
                    ease: Power2.easeOut
                }, '-=0.1')
                .to([heroItemCircleMobile, heroItemItemTitleMobile, heroItemItemSubTitleOneMobile, heroItemItemSubTitleTwoMobile, heroItemItemTagseMobile, heroItemLineMobile, cloudMobile, cloudTextMobile], 0, {
                    autoAlpha: 1
                });
        }
    }



    var controller = new ScrollMagic.Controller();

    var tween = TweenMax.staggerFromTo(".button-primary", 1, {
        cycle: {
            x: ['-100%', '100%']
        },
        autoAlpha: 0
    }, {
        cycle: {
            x: ['0%', '0%']
        },
        autoAlpha: 1,
        ease: Power2.easeOut
    });


    var scene = new ScrollMagic.Scene({
            triggerElement: ".category-selection"
        })
        .setTween(tween)
        .addTo(controller);


    if ($('.current-category').text() == 'About'){
        $('.primary-nav li:nth-child(1)').children('span').addClass("active-nav-btn-bg");
        $('.navbar-nav li:nth-child(1)').children('span').addClass("active-nav-btn-bg");
    }
    if ($('.current-category').text() == 'Social'){
        $('.primary-nav li:nth-child(2)').children('span').addClass("active-nav-btn-bg");
        $('.navbar-nav li:nth-child(2)').children('span').addClass("active-nav-btn-bg");
    }
    if ($('.current-category').text() == 'Webdesign'){
        $('.primary-nav li:nth-child(3)').children('span').addClass('active-nav-btn-bg');
        $('.navbar-nav li:nth-child(3)').children('span').addClass('active-nav-btn-bg');
    }
    if ($('.current-category').text() == 'Misc'){
        $('.primary-nav li:nth-child(4)').children('span').addClass('active-nav-btn-bg');
        $('.navbar-nav li:nth-child(4)').children('span').addClass('active-nav-btn-bg');
    }

});
