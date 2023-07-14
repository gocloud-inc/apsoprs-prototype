import { Modal, Dropdown } from "bootstrap";
import Button from "./buttons";
import Greeting from "./greeting";
import Theme from "./theme";
import Header from "./header";

import Aos from "aos";
import 'aos/dist/aos.css'; // You can also use <link> for styles

Aos.init();

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';

// JavaScript to hide the preloader after the page loads
window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    preloader.style.display = 'none';
});

const swiperBanners = new Swiper('.swiper-banners', {
    centeredSlides: true,
    centeredSlidesBounds: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // autoplay: {
    //     delay: 5000,
    // },
});

const swiperUpcomingEvents = new Swiper('.swiper-upcoming-events', {
    initialSlide: 3,
    slidesPerView: 3,
    spaceBetween: 30,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 10
        },
        // when window width is >= 640px
        640: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    },
    centeredSlides: true,
    centeredSlidesBounds: true,
    grabCursor: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
    },
});

Button.apply(Button);
Greeting.apply(Greeting);
Theme.apply(Theme);
Header.apply(Header);
