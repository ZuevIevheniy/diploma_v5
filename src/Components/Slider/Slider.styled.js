import styled from 'styled-components';
import slide1 from '../AssetsImg/img1.png';
import slide2 from '../AssetsImg/img2.png';
import slide3 from '../AssetsImg/img3.png';
import slide4 from '../AssetsImg/img4.png';
import slide5 from '../AssetsImg/img5.png';


export const Text = styled.p`
  position: absolute;
  font-weight: 700;
  font-size: 30px;
  color: white;
  max-width: 400px;
  margin-top: 50px;
  margin-left: 50px;
  padding: 20px;
  border: 2px solid lightblue;
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
