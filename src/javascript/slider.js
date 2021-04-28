import Splide from '@splidejs/splide';

document.addEventListener( 'DOMContentLoaded', function () {
    new Splide('#splide', {
        type: 'loop',
        perPage: 3,
        focus: 'center',
        autoplay: true,
        interval: 8000,
        flickMaxPages: 3,
        updateOnMove: true,
        pagination: false,
        padding: '10%',
        throttle: 300,
        breakpoints: {
        960: {
            perPage: 1,
            padding: '30%'
        },
        640: {
            perPage: 1,
            padding: '20%'
        },
        480: {
            perPage: 1,
            padding: '10%'
        }
      }
    }).mount();
  });