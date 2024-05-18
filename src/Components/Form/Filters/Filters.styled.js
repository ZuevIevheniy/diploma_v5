import styled from 'styled-components';
import { IoSearchSharp } from 'react-icons/io5';


export const Wraper = styled.div`
  display: flex;
`;

export const WraperInput = styled.div`
  position: relative;
  margin: 15px;
  max-width: 300px;
  
`;

export const WraperService = styled.div`
  position: relative;
  margin: 15px;
  /* max-width: 300px; */
  width: 605px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 26px;
  font-weight: 600;
`;

export const Input = styled.input`
  font-size: 18px;
  border-radius: 10px;
  font-weight: 600;
  border: 3px solid #1c7ed6;
  padding: 6px 8px 6px 35px;
  /* margin-top: 20px; */
`;

export const InputService = styled.input`
  font-size: 18px;
  border-radius: 10px;
  font-weight: 600;
  border: 3px solid #1c7ed6;
  padding: 6px 8px 6px 35px;
  /* margin-top: 20px; */
`;

export const AutocompList = styled.ul`
  position: absolute;
  z-index: 5;
  left: 0;
  top: 77px;
  border-radius: 8px;
  background-color: white;
  font-weight: 600;
  font-size: 16px;
  border: 1px #888 solid;
  padding-top: 3px;
  padding-bottom: 3px;

  -webkit-box-shadow: 1px 1px 17px 0px rgba(34, 60, 80, 0.09);
  -moz-box-shadow: 1px 1px 17px 0px rgba(34, 60, 80, 0.09);
  box-shadow: 2px 2px 17px 0px rgba(34, 60, 80, 0.09);

  width: 100%;
  max-height: 250px;
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

export const AutocompItem = styled.li`
    margin-left: 15px;
    margin-right: 8px;
    padding: 4px;
    outline: none; 

  &:hover,
  &:focus { 
    background-color: rgb(180, 180, 180);
    cursor: pointer;
    transition: cubic-bezier(1, 0, 0, 1) 0.3s all;
  }
`;

export const Span = styled.span`
  align-items: center;
  position: absolute;
  left: 8px;
  top: 62px;
  transform: translateY(-50%);
`;

export const SearchIcon = styled(IoSearchSharp)``;


export const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  font-weight: 600;
  position: absolute;
  white-space: nowrap;
  top: -15px;
`;