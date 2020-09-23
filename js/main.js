$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.slider-nav',
        fade: true

    });
    $('.slider-nav').slick({
        slidesToScroll: 3,
        slidesToShow: 1,
        variableWidth: true,
        centerMode: true,

        arrows: false,
        asNavFor: '.slider',
        focusOnSelect: true
    });
});