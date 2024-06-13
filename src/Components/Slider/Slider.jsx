import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import "./Slider.css";

import {
  SliderItem1,
  SliderItem2,
  SliderItem3,
  SliderItem4,
  SliderItem5,
  Text,
} from './Slider.styled';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <SliderItem1 className="slider-item">
        <Text>Drive Fix: ваш надійний автосервіс, де якість і турбота зустрічаються. Швидко, професійно та з любов'ю до вашого автомобіля!</Text>
      </SliderItem1>
      <SliderItem2 className="slider-item">
      
      </SliderItem2>
      <SliderItem3 className="slider-item">
       
      </SliderItem3>
      <SliderItem4 className="slider-item">
        
      </SliderItem4>
      <SliderItem5 className="slider-item">
      
      </SliderItem5>
    </Slider>
  );
}
