import styled from 'styled-components';
import slide1 from '../AssetsImg/image1.png';
import slide2 from '../AssetsImg/image2.jpg';
import slide3 from '../AssetsImg/image3.jpg';
import slide4 from '../AssetsImg/image4.jpg';
import slide5 from '../AssetsImg/image5.jpg';


export const Text = styled.p`
  position: absolute;
  white-space: nowrap;
  padding: 6px;
  border-radius: 10px;
  border: 3px #1c7ed6 solid;
  bottom: 20px; /* расстояние от нижнего края */
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: #1b1116; /* например, если вам нужен белый текст */
  background-color: white;
  font-size: 30px; /* размер шрифта можно изменить по необходимости */
  font-weight: 600;
`;

export const SliderItem1 = styled.div`
  display: flex;
  position: relative;
  height: 600px;
  justify-content: center;
  align-items: center;
  background-image: url(${slide1});
  background-size: cover ;
`;

export const SliderItem2 = styled.div`
   display: flex;
  position: relative;
  height: 600px;
  justify-content: center;
  align-items: center;
  background-image: url(${slide2});
  background-size: cover;
`;

export const SliderItem3 = styled.div`
   display: flex;
  position: relative;
  height: 600px;
  justify-content: center;
  align-items: center;
  background-image: url(${slide3});
  background-size: cover;
`;

export const SliderItem4 = styled.div`
   display: flex;
  position: relative;
  height: 600px;
  justify-content: center;
  align-items: center;
  background-image: url(${slide4});
  background-size: cover;
`;

export const SliderItem5 = styled.div`
   display: flex;
  position: relative;
  height: 600px;
  justify-content: center;
  align-items: center;
  background-image: url(${slide5});
  background-size: cover;
`;

export const SliderItem6 = styled.div`
   display: flex;
  position: relative;
  height: 600px;
  justify-content: center;
  align-items: center;
  background-image: url(${slide1});
  background-size: cover;
`;
