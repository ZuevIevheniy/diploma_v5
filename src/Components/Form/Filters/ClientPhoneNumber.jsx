import { useState, useEffect } from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import * as yup from 'yup';
import {
  WraperInput,
  Label,
  Input,
  Span,
  SearchIcon,
  ErrorMessage,
} from './Filters.styled';

export default function ClientPhoneNumber({ setFilters }) {
  const [numberValue, setNumberValue] = useState('');
  const [errors, setErrors] = useState({});
  const [inputActive, setInputActive] = useState(false);

  const validationSchema = yup.object().shape({
    numberValue: yup
      .string()
      .min(10, 'Must be 10 or more')
      .required('Required'),
  });

  useEffect(() => {
    const toUpperFilterValue = numberValue.toUpperCase();
    validationSchema
      .validate({ numberValue: toUpperFilterValue })
      .then(() => {
        setErrors({});
      })
      .catch(error => {
        setErrors({ numberValue: error.message });
      });
  }, [numberValue]);

  const handleChangeNumber = event => {
    const { value } = event.target;

    const filteredValue = value.replace(/[^\d+]/g, '');
    setNumberValue(filteredValue);
    setFilters(prevFilters => ({
      ...prevFilters,
      phoneNumber: filteredValue,
    }));
  };

  return (
    <WraperInput>
      <Label>
        Client number phone
        {errors.numberValue &&
          inputActive && ( // Проверяем, активен ли инпут перед отображением ошибки
            <ErrorMessage>{errors.numberValue}</ErrorMessage>
          )}
        <Input
          type="tel"
          pattern="[0-9]*"
          placeholder="068 032 91 08"
          value={numberValue}
          onChange={handleChangeNumber}
          onFocus={() => setInputActive(true)} // Устанавливаем inputActive в true, когда фокус в инпуте
          onBlur={() => setInputActive(false)} // Устанавливаем inputActive в false, когда фокус ушел из инпута
        />
      </Label>
      <Span>
        <BsTelephoneFill size={20} color="#767676" />
      </Span>
    </WraperInput>
  );
}
