import styled from 'styled-components';
import { ImCross } from 'react-icons/im';

export const MainWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
`;

export const CardWrapper = styled.div`
  position: relative;
  border: 4px solid #2196f3;
  border-radius: 20px;
  padding: 8px;
  width: 350px;
`;

export const CardHeader = styled.div`
    height: 40px;
 
`;

export const CardTitle = styled.h2``;

export const CardBody = styled.div``;

export const CardItem = styled.p``;

export const ServiceList = styled.ul`
min-height: 200px;
max-height: 200px;
height: auto;
     overflow: auto;

  /* Кастомизация полосы прокрутки */
  &::-webkit-scrollbar {
    width: 10px; /* Ширина полосы */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888; /* Цвет ползунка */
    border-radius: 6px; /* Радиус скругления углов ползунка */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555; /* Цвет ползунка при наведении */
  }
`;

export const ServiceItem = styled.li``;

export const BtnDelInvoice = styled.button`
  position: absolute;
  top: 6px;
  right: 6px;
  background-color: #e82c4d;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 0 30% 0 30%;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b3243d;
  }
`;

export const IconDel = styled(ImCross)`
  position: absolute;
  color: white;
`;
