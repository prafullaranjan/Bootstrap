import './plugins/pace/pace';
import './plugins/swiper/swiper';
import './plugins/tippy/tippy';

document.addEventListener("DOMContentLoaded", function() {
    // Plugins
    Pace.start();
    Waves.init();
    Waves.attach('.btn', ['waves-light']);
});