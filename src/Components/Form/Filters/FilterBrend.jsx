import { useState, useEffect, useRef } from 'react'; 
import * as yup from 'yup';
import {
  WraperInput,
  Label,
  Input,
  AutocompList,
  AutocompItem,
  Span,
  ErrorMessage,
  SearchIcon,
} from './Filters.styled';
import useClickOutside from '../../CustomHooks/useClickOutside';

export default function FilterBrend({ allCars, setFilters }) {
  const [filterValue, setFilterValue] = useState('');
  const [selectedCar, setSelectedCar] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [errors, setErrors] = useState({});

  const inputRef = useRef(null);

  useClickOutside(inputRef, () => {
    setIsOpen(false);
  });

  const modelValidation = allCars.map(brand => {
    return brand.name.toUpperCase();
  });

  const validationSchema = yup.object().shape({
    filterValue: yup
      .string()
      .oneOf(modelValidation, 'This brand of car was not found'),
  });

  useEffect(() => {
    if (selectedCar) {
      setFilters(prevFilters => ({
        ...prevFilters,
        filteredBrand: selectedCar.name,
      }));
    }
  }, [selectedCar, setFilters]);

  useEffect(() => {
    const toUpperFilterValue = filterValue.toUpperCase();
    validationSchema
      .validate({ filterValue: toUpperFilterValue })
      .then(() => {
        setErrors({});
      })
      .catch(error => {
        setErrors({ filterValue: error.message });
      });
  }, [filterValue]);

  const autocompleteBrand = allCars.filter(car => {
    return car.name.toUpperCase().includes(filterValue.toUpperCase());
  });

  const handleChooseAutoClick = event => {
    event.preventDefault();
    event.stopPropagation();
    setFilterValue(event.target.textContent);

    const currentValue = event.target.textContent.toUpperCase();

    const isHasBrend = autocompleteBrand.find(
      brand => brand.name.toUpperCase() === currentValue
    );

    if (isHasBrend) {
      setSelectedCar(isHasBrend);
      setIsOpen(false);
    }
  };

  const handleChooseAutoKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();

      setFilterValue(event.target.textContent);

      const currentValue = event.target.textContent.toUpperCase();

      const isHasBrend = autocompleteBrand.find(
        brand => brand.name.toUpperCase() === currentValue
      );

      if (isHasBrend) {
        setSelectedCar(isHasBrend);
        setIsOpen(false);
      }
    }
  };

  const writeAutoKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();

      const isHasBrend = autocompleteBrand.find(
        brand => brand.name.toUpperCase() === filterValue.toUpperCase()
      );

      if (isHasBrend) {
        setSelectedCar(isHasBrend);

        setIsOpen(false);
      }
    }
  };

  const inputClickHandler = e => {
    setIsOpen(true);
  };

  return (
    <WraperInput>
      <Label>
        Brand auto{' '}
        {errors.filterValue && filterValue.length > 1 && (
          <ErrorMessage>{errors.filterValue}</ErrorMessage>
        )}
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search brand auto"
          value={filterValue}
          onClick={inputClickHandler}
          onChange={event => setFilterValue(event.target.value)}
          onKeyDown={event => writeAutoKeyDown(event)}
        />
        {filterValue && autocompleteBrand.length > 0 && isOpen ? (
          <AutocompList>
            {autocompleteBrand.map(car => (
              <AutocompItem
                tabIndex="0"
                key={car.id}
                onClick={event => handleChooseAutoClick(event)}
                onKeyDown={event => handleChooseAutoKeyDown(event)}
              >
                <p>{car.name}</p>
              </AutocompItem>
            ))}
          </AutocompList>
        ) : null}
      </Label>
      <Span>
        <SearchIcon size={25} color="#767676" />
      </Span>
    </WraperInput>
  );
}
