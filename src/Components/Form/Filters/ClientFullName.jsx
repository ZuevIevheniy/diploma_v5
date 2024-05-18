import { useState, useEffect } from 'react';
import { IoMdPerson } from 'react-icons/io';

import * as yup from 'yup';
import {
  WraperInput,
  Label,
  Input,
  Span,
  SearchIcon,
  ErrorMessage,
} from './Filters.styled';

export default function ClientFullName({ setFilters }) {
  const [nameValue, setNameValue] = useState('');
  const [errors, setErrors] = useState({});
  const [inputActive, setInputActive] = useState(false);

  const validationSchema = yup.object().shape({
    nameValue: yup
      .string()
      .min(7, 'Must be 7 or more')
      .max(40, 'Maximum number of characterse 40 or less')
      .required('Required'),
  });

  useEffect(() => {
    const toUpperFilterValue = nameValue.toUpperCase();
    validationSchema
      .validate({ nameValue: toUpperFilterValue })
      .then(() => {
        setErrors({});
      })
      .catch(error => {
        setErrors({ nameValue: error.message });
      });
  }, [nameValue]);

  const handleChangeName = event => {
    setNameValue(event.target.value);
    setFilters(prevFilters => ({
      ...prevFilters,
      fullName: event.target.value,
    }));
  };

  return (
    <WraperInput>
      <Label>
        Client full name
        {errors.nameValue &&
          inputActive && ( // Проверяем, активен ли инпут перед отображением ошибки
            <ErrorMessage>{errors.nameValue}</ErrorMessage>
          )}
        <Input
          type="text"
          placeholder="Evgeniy Zuev"
          value={nameValue}
          onChange={handleChangeName}
          onFocus={() => setInputActive(true)} // Устанавливаем inputActive в true, когда фокус в инпуте
          onBlur={() => setInputActive(false)} // Устанавливаем inputActive в false, когда фокус ушел из инпута
        />
      </Label>
      <Span>
        <IoMdPerson size={25} color="#767676" />
      </Span>
    </WraperInput>
  );
}
