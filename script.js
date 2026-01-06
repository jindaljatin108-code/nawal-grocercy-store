let searchForm = document.querySelector('.search-form');
let shoppingCart = document.querySelector('.shopping-cart');
let loginForm = document.querySelector('.login-form');
let navbar = document.querySelector('.navbar');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

document.querySelector('#cart-btn').onclick = () => {
    shoppingCart.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active'); // Fixed: 'actve' to 'active'
    navbar.classList.remove('active');
};

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
};

// Close all when clicking outside on mobile
window.onscroll = () => {
    searchForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
};

// Initialize Swiper (make sure you've included Swiper CSS & JS in your HTML)
var swiper = new Swiper(".product-slider", { // Fixed: Capital 'S' in Swiper
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1, // Fixed: 'slidesPerview' to 'slidesPerView'
        },
        768: {
            slidesPerView: 2, // Fixed: 'slidesPerview' to 'slidesPerView'
        },
        1024: {
            slidesPerView: 3, // Fixed: 'slidesPerview' to 'slidesPerView'
        },
    },
});

var swiper = new Swiper(".Review-slider", { // Fixed: Capital 'S' in Swiper
    loop: true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1, // Fixed: 'slidesPerview' to 'slidesPerView'
        },
        768: {
            slidesPerView: 2, // Fixed: 'slidesPerview' to 'slidesPerView'
        },
        1024: {
            slidesPerView: 3, // Fixed: 'slidesPerview' to 'slidesPerView'
        },
    },
});