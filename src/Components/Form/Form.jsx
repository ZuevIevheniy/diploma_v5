import { useState } from 'react';
import DataCars from '../../Data/cars.json';
import FilterBrend from './Filters/FilterBrend';
import FilterModel from './Filters/FilterModel';
import { fetchAddOrderCar } from '../api';
import { AddButton, ClearButton, MainWrapper, Wrapper } from './Form.styled';
import ClientFullName from './Filters/ClientFullName';
import ClientPhoneNumber from './Filters/ClientPhoneNumber';
import ClientEmailAddress from './Filters/ClientEmailAddress';
import ClientVinNumber from './Filters/ClientVinNumber';
import FilterService from './Filters/FilterService';
import {
  BtnDelInvoice,
  ItemInvoice,
  ListInvoice,
  IconDel,
  WrapperInvoice,
} from './Filters/Invoice.styled';

export const Form= () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [filters, setFilters] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    vinNumber: '',
    filteredBrand: '',
    filteredModel: '',
    filteredService: [],
  });

  const handleSubmitForm = async event => {
    event.preventDefault();
    // console.log('Form submitted:', filters);

    try {
      setIsLoading(true);
      setError(true);
      await fetchAddOrderCar(filters);
      console.log(filters);
      console.log('Я внес в базу filters');
      window.location.reload();
      clearForm();
    } catch (error) {
      // toast.error('Quiz failed to load');
      setError(true);
      console.log('Я не смог внести в базу filters');
    } finally {
      setIsLoading(false);
    }
  };

  function clearForm() {
    window.location.reload();
  }

  function handlDelServiceClick(index) {
    console.log(filters.filteredService);
   
    setFilters((prevFilters )=>{
      const updatedServices = [...prevFilters.filteredService];
      updatedServices.splice(index, 1);
      console.log(updatedServices);
      return { ...prevFilters, filteredService: updatedServices };
    })

    
  }


  return (
    <MainWrapper>
      <form onSubmit={handleSubmitForm}>
        <Wrapper>
          <ClientFullName setFilters={setFilters} />
          <ClientPhoneNumber setFilters={setFilters} />
          <ClientEmailAddress setFilters={setFilters} />
          <ClientVinNumber setFilters={setFilters} />
          <FilterBrend allCars={DataCars} setFilters={setFilters} />
          <FilterModel
            allCars={DataCars}
            brandCars={filters.filteredBrand}
            setFilters={setFilters}
          />
          <FilterService filters={filters} setFilters={setFilters} />
          <AddButton type="submit">Create request</AddButton>
          <ClearButton type="reset" onClick={clearForm}>
            Clear request
          </ClearButton>
        </Wrapper>
      </form>
      <WrapperInvoice>
        {filters.filteredService && filters.filteredService.length > 0 && (
          <ListInvoice>
            {filters.filteredService.map((service, index) => (
              <ItemInvoice key={index}>
                <p>{`${index + 1} ${service}`}</p>
                <BtnDelInvoice type="button" onClick={() => handlDelServiceClick(index)}>
                  <IconDel size={15} color="white" />
                </BtnDelInvoice>
              </ItemInvoice>
            ))}
          </ListInvoice>
        )}
      </WrapperInvoice>
    </MainWrapper>
  );
}
