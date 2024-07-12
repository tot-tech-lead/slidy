export interface Swiper {
    slideTo: Function,
    autoplay: {
        start: Function,
        timeLeft: number
    },
    disable: Function,
    update: Function,
    updateSlides: Function,
    initialized: boolean,
    onLoad: Function
}

export interface SwiperEl extends HTMLElement {
    swiper: Swiper
}

export interface SwiperHTML extends SwiperEl {
    initialize: Function
}

export interface SwiperProgressEvent extends CustomEvent {
    detail: number[];
}