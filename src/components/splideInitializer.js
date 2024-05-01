import Splide from "@splidejs/splide";
import { fillCarousel } from "./modules";

let splide = null;

export function initSplide(product, color) {
    fillCarousel(product, document.querySelector(".page-product-content"), color);
    if (splide) {
        splide.destroy();
    }
    splide = new Splide('.splide', {
        type: 'fade',
        rewind: true,
        arrows: true,
        pagination: true,
    }).mount();
}
