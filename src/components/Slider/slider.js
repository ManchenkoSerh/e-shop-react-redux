import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import React from "react";
import {Img} from "./slider-style";


const Slider=()=>{
    return(
        <div>
        <Carousel
            autoPlay={5000}
            animationSpeed={1000}
            infinite
        >
            <Img src="https://i.eldorado.ua//651x400/banners_images/24925-1591974346.jpg" />
            <Img src="https://i.eldorado.ua//651x400/banners_images/25105-1591976672.jpg" />
            <Img src="https://i.eldorado.ua//651x400/banners_images/23857-1592562492.png" />
            <Img src="https://i.eldorado.ua//651x400/banners_images/25325-1592829400.jpg" />
            <Img src="https://i.eldorado.ua//651x400/banners_images/24563-1590773207.jpg" />
        </Carousel>
        </div>
    )
}

export default Slider;
