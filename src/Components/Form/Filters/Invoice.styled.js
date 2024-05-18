import styled from 'styled-components';
import { ImCross } from "react-icons/im";

export const WrapperInvoice = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 660px;
  min-height: 600px;
  justify-content: center;
  border: 4px solid #767676;
  border-radius: 35px;
`;

export const ListInvoice = styled.ul`
  width: 100%;
`;
export const ItemInvoice = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* overflow: hidden; */

  font-size: 18px;
  margin: 10px;
  padding-left: 15px;
  padding-right: 15px;
  height: 50px;
  border: 3px solid #2196f3;
  border-radius: 30px;
`;

export const Span = styled.span`
  align-items: center;
  position: absolute;
  left: 8px;
  top: 62px;
  transform: translateY(-50%);
`;

export const BtnDelInvoice = styled.button`
  position: relative;
  background-color: #e82c4d;
  color: #fff;
  position: relative;
  /* padding: 10px 15px; */
  /* margin: 15px; */
  display: flex;
  align-items: center;
  justify-content: center;

  width: 36px;
  height: 36px;

  white-space: nowrap;
  border: none;
  border-radius: 50px;

  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b3243d;
  }
`;

export const SpanDel = styled.span`
  align-items: center;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 0;
  left: 0;
  transform: translateY(-50%);
`;

export const IconDel = styled(ImCross)`
  position: absolute;
  color: black;

`;
