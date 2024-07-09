export interface Swiper {
    slideTo: Function,
    autoplay: {
        start: Function,
        timeLeft: number
    },
    initialized: boolean,
    onLoad: Function
}

export interface SwiperEl extends Element {
    swiper: Swiper
}

export interface SwiperProgressEvent extends CustomEvent {
    detail: number[];
}