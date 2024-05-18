import { useState, useEffect } from 'react';
import { MdAlternateEmail } from "react-icons/md";

import * as yup from 'yup';
import {
  WraperInput,
  Label,
  Input,
  Span,

  ErrorMessage,
} from './Filters.styled';


export default function ClientEmailAddress({ setFilters }) {
  const [emailValue, setEmailValue] = useState('');
  const [errors, setErrors] = useState({});
  const [inputActive, setInputActive] = useState(false);
  

  const validationSchema = yup.object().shape({
    emailValue: yup.string().email('Invalid email').required('Required'),
  });

  useEffect(() => {
    validationSchema
      .validate({ emailValue })
      .then(() => {
        setErrors({});
      })
      .catch(error => {
        setErrors({ emailValue: error.message });
      });
  }, [emailValue]);

  const handleChangeEmail = event => {
    const { value } = event.target;
    setEmailValue(value);
    setFilters(prevFilters => ({
      ...prevFilters,
      emailAddress: value,
    }));
  };

  return (
    <WraperInput>
      <Label>
        Client email address
        {errors.emailValue &&
          inputActive && (
            <ErrorMessage>{errors.emailValue}</ErrorMessage>
          )}
        <Input
          type="email"
          placeholder="example@example.com"
          value={emailValue}
          onChange={handleChangeEmail}
          onFocus={() => setInputActive(true)}
          onBlur={() => setInputActive(false)}
        />
      </Label>
      <Span>
      <MdAlternateEmail  size={25} color="#767676" />
      </Span>
    </WraperInput>
  );
}