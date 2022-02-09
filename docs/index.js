$('body').imagesLoaded(function () {
    $('.loading').remove();
    new WOW().init();
    AOS.init({
        once: true
    });
});