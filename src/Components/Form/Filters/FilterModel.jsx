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

export default function FilterModel({ allCars, brandCars, setFilters }) {
  const [filterValue, setFilterValue] = useState('');
  const [selectedModel, setSelectedModel] = useState(null);
  const [isOpen, setIsOpen] = useState(true);
  const [errors, setErrors] = useState({});

  const inputRef = useRef(null);

  useClickOutside(inputRef, () => {
    setIsOpen(false);
  });

  const modelValidationArr = allCars
    ? allCars
        .filter(brand => brand.name === brandCars)
        .flatMap(brand => brand.models)
        .map(model => model.name.toUpperCase())
    : [];

  const validationSchema = yup.object().shape({
    filterValue: yup
      .string()
      .oneOf(modelValidationArr, 'This model of car was not found'),
  });

  useEffect(() => {
    if (selectedModel) {
      setFilters(prevFilters => ({
        ...prevFilters,
        filteredModel: selectedModel,
      }));
    }
  }, [selectedModel, setFilters]);

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

  

  const autocompleteModel = allCars
    ? allCars
        .filter(brand => brand.name === brandCars)
        .flatMap(brand =>
          brand.models
            .filter(model =>
              model.name.toUpperCase().includes(filterValue.toUpperCase())
            ) // Додайте фільтрацію за значенням filterValue
            .map(model => model.name)
        )
    : [];

  const handleChooseAutoClick = event => {
    event.preventDefault();
    event.stopPropagation();
    setFilterValue(event.target.textContent);
    const currentValue = event.target.textContent.toUpperCase();
    const isHasModel = autocompleteModel.find(
      model => model.toUpperCase() === currentValue
    );
    if (isHasModel) {
      setSelectedModel(isHasModel);
      setIsOpen(false);
    }
  };

  const handleChooseAutoKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      setFilterValue(event.target.textContent);
      const currentValue = event.target.textContent.toUpperCase();
      const isHasModel = autocompleteModel.find(
        model => model.toUpperCase() === currentValue
      );
      if (isHasModel) {
        setSelectedModel(isHasModel);

        setIsOpen(false);
      }
    }
  };

  const writeAutoKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      const isHasModel = autocompleteModel.find(
        model => model.toUpperCase() === filterValue.toUpperCase()
      );
      if (isHasModel) {
        setSelectedModel(isHasModel);

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
        Model auto
        {errors.filterValue && filterValue.length > 0 && (
          <ErrorMessage>{errors.filterValue}</ErrorMessage>
        )}
        <Input
        ref={inputRef}
          type="text"
          placeholder="Search model auto"
          value={filterValue}
          onClick={inputClickHandler}
          onChange={event => setFilterValue(event.target.value)}
          onKeyDown={event => writeAutoKeyDown(event)}
        />
        {filterValue && autocompleteModel.length > 0 && isOpen ? (
          <AutocompList>
            {console.log(autocompleteModel)}
            {autocompleteModel.map(model => (
              <AutocompItem
                tabIndex="0"
                key={model}
                onClick={event => handleChooseAutoClick(event)}
                onKeyDown={event => handleChooseAutoKeyDown(event)}
              >
                <p>{model}</p>
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
