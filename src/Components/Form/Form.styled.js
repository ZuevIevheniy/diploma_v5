import styled from 'styled-components';


export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap:30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 660px;
  min-height: 500px;
  justify-content: center;
  border: 4px solid #2196f3;
  border-radius: 35px;
`;

export const AddButton = styled.button`
  background-color: #2196f3;
  color: #fff;
  padding: 10px 15px;
  margin: 15px;
  width: 40%;
  white-space: nowrap;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1565c0;
  }
`;

export const ClearButton = styled.button`
  background-color: #e82c4d;
  color: #fff;
  padding: 10px 15px;
  margin: 15px;
  width: 40%;
  white-space: nowrap;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #b3243d;
  }
`;

