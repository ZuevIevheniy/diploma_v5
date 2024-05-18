import { useState, useEffect } from 'react';
import { FaCar } from "react-icons/fa";
import * as yup from 'yup';
import {
  WraperInput,
  Label,
  Input,
  Span,
  ErrorMessage,
} from './Filters.styled';

export default function ClientVinNumber({ setFilters }) {
  const [vinValue, setVinValue] = useState('');
  const [errors, setErrors] = useState({});
  const [inputActive, setInputActive] = useState(false);

  const validationSchema = yup.object().shape({
    vinValue: yup
      .string()
      .min(17, 'Must be exactly 17 characters')
      .max(17, 'Must be exactly 17 characters')
      .required('Required'),
  });

  useEffect(() => {
    const toUpperFilterValue = vinValue.toUpperCase();
    validationSchema
      .validate({ vinValue: toUpperFilterValue })
      .then(() => {
        setErrors({});
      })
      .catch(error => {
        setErrors({ vinValue: error.message });
      });
  }, [vinValue]);

  const handleChangeVin = event => {
    const { value } = event.target;

    const upperCaseValue = value.toUpperCase();
    setVinValue(upperCaseValue);
    setFilters(prevFilters => ({
      ...prevFilters,
      vinNumber: upperCaseValue,
    }));
  };

  return (
    <WraperInput>
      <Label>
        Client VIN Number
        {errors.vinValue && inputActive && (
          <ErrorMessage>{errors.vinValue}</ErrorMessage>
        )}
        <Input
          type="text"
          placeholder="1HGCM82633A123456"
          value={vinValue}
          onChange={handleChangeVin}
          onFocus={() => setInputActive(true)}
          onBlur={() => setInputActive(false)}
        />
      </Label>
      <Span>
        <FaCar  size={20} color="#767676" />
      </Span>
    </WraperInput>
  );
}
