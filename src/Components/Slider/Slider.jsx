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
        <Text>Наши специалисты</Text>
      </SliderItem1>
      <SliderItem2 className="slider-item">
        <Text>Наши лучшие инженеры</Text>
      </SliderItem2>
      <SliderItem3 className="slider-item">
        <Text>Наша аналоговнетная мастерская</Text>
      </SliderItem3>
      <SliderItem4 className="slider-item">
        <Text>Наши работы - эксклюзивный тюнинг спорткаров</Text>
      </SliderItem4>
      <SliderItem5 className="slider-item">
        <Text>Наш последний шедевр - "полу рак полу" </Text>
      </SliderItem5>
    </Slider>
  );
}
