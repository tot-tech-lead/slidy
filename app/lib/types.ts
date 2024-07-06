// types.ts
export interface Image {
    Photo: string;
    "125": string;
}

export interface Images {
    [key: string]: Image[];
}

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
