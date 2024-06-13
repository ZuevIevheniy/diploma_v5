import { useState, useEffect, useRef } from 'react';
import { FiTool } from 'react-icons/fi';
import {
  WraperInput,
  Label,
  Input,
  AutocompList,
  AutocompItem,
  Span,
  ErrorMessage,
  WraperService,
  SearchIcon,
} from './Filters.styled';
import { fetchOrderCarAll } from '../../api';
import useClickOutside from '../../CustomHooks/useClickOutside';

export default function FilterService({ filters, setFilters }) {
  const [filterValue, setFilterValue] = useState('');
  const [allService, setAllService] = useState([]);
  const [selectedService, setSelectedService] = useState([]);
  const [isOpen, setIsOpen] = useState(true);
  const [errors, setErrors] = useState({});

  const inputRef = useRef(null);

  useClickOutside(inputRef, () => {
    setIsOpen(false);
  });

  useEffect(() => {
    const getAllService = async () => {
      try {
        const response = await fetchOrderCarAll();
        setAllService(response);
      } catch (error) {
        setErrors(true);
      }
    };
    getAllService();
  }, []);

  useEffect(() => {
    setToMainStateServiceArr();
  }, [selectedService]);
  const autocompleteService = allService.filter(service => {
    return service.service.toUpperCase().includes(filterValue.toUpperCase());
  });

  const handleChooseServiceClick = event => {
    event.preventDefault();
    event.stopPropagation();
    setFilterValue(event.target.textContent);

    setTimeout(() => {
      setFilterValue("");
    }, 1000);

    setSelectedService(prevSelectedService => {
      const newSet = new Set(prevSelectedService);
      newSet.add(event.target.textContent);
      return newSet;
    });

    setIsOpen(false);
  };

  const handleChooseAutoKeyDown = event => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      setFilterValue(event.target.textContent);

      setSelectedService(prevSelectedService => {
        const newSet = new Set(prevSelectedService);
        newSet.add(event.target.textContent);
        return newSet;
      });

      setIsOpen(false);
    }
  };
  

  const setToMainStateServiceArr = () => {
    const selectedServiceArray = Array.from(selectedService); // Преобразовать Set в массив
    setFilters(prevFilter => ({
      ...prevFilter,
      filteredService: selectedServiceArray,
    }));
  };

  const inputClickHandler = e => {
    setIsOpen(true);
  };

  return (
    <WraperService>
      <Label>
        Services
        {/* {errors.filterValue && filterValue.length > 1 && (
          <ErrorMessage>{errors.filterValue}</ErrorMessage>
        )} */}
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search service"
          value={filterValue}
          onClick={inputClickHandler}
          onChange={event => setFilterValue(event.target.value)}
          // onKeyDown={event => writeAutoKeyDown(event)}
        />
        {filterValue.length > 0 && isOpen ? (
          <AutocompList>
            {autocompleteService.map(service => (
              <AutocompItem
                tabIndex="0"
                key={service.id}
                onClick={event => handleChooseServiceClick(event)}
                onKeyDown={event => handleChooseAutoKeyDown(event)}
              >
                <p>{service.service}</p>
              </AutocompItem>
            ))}
          </AutocompList>
        ) : null}
      </Label>
      <Span>
        <FiTool size={25} color="#767676" />
      </Span>
    </WraperService>
  );
}
