$(document).ready(function () {
    let commentsCarousel = $('.commenter-carousel').owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        dotsContainer: '.comment__selector'
    });

    $('.comment__selector-item').click(function () {
        commentsCarousel.trigger('to.owl.carousel', [$(this).index(), 1000]);
    })

    if ($(window).width() <= 992) {
        let galleryCarousel = $('.gallery-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            navText: [
                "<img src='./img/arrow-prev.png' class='gallery__arrow-prev'>",
                "<img src='./img/arrow-next.png' class='gallery__arrow-next'>"
            ]
        });
    } else {
        $('.gallery-carousel').addClass('off');
    }
});

$(window).resize(function () {
    if ($(this).width() <= 992) {
        let galleryCarousel = $('.gallery-carousel').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            navText: [
                "<img src='icons/arrow-prev.png' class='gallery__arrow-prev'>",
                "<img src='icons/arrow-next.png' class='gallery__arrow-next'>"
            ]
        });
    } else {
        $('.gallery-carousel')
            .trigger('destroy.owl.carousel')
            .addClass('off');
    }
});
