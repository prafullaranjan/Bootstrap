import Swiper from "swiper/bundle";
import tippy from 'tippy.js';
import Waves from 'node-waves/src/js/waves';
try {
    window.Popper = require('@popperjs/core').default;
    window.bootstrap = require('bootstrap');
    window.Waves = Waves;
    window.Swiper = Swiper;
    window.tippy = tippy;
} catch (e) {
    console.log(e)
}

