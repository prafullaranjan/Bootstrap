window.addEventListener('DOMContentLoaded', (event) => {
    let PropertyCardSlider = new Swiper('.card-slider .swiper-container', {
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 0,
        keyboard: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        },
        grabCursor: true,
        loop: true,
        preloadImages: false,
        lazy: true,
        speed: 500,
        effect: "slide",
        nested: true
    });

});