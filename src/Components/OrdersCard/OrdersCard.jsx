import React, { useState, useEffect } from "react";
import {
  MainWrapper,
  CardWrapper,
  CardHeader,
  CardTitle,
  CardBody,
  CardItem,
  ServiceList,
  ServiceItem,
  BtnDelInvoice,
  IconDel,
} from "./OrdersCard.styled";
import {
  fetchGetAllOrder,
  featchDeleteIdOrder,
  fetchOrderCarAll,
} from "../api";

export const OrdersCard = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(false);
  const [compareServices, setCompareServices] = useState([]);

  useEffect(() => {
    const getAllService = async () => {
      try {
        const response = await fetchOrderCarAll();
        setCompareServices(response);
      } catch (error) {
        setError(true);
      }
    };
    getAllService();
  }, []);

  useEffect(() => {
    async function getOrdersAllOrders() {
      try {
        setError(false);
        const fetchOrders = await fetchGetAllOrder();
        setOrders(fetchOrders.reverse());
      } catch (error) {
        setError(true);
        console.log("Я не смог забрать заказы");
      }
    }

    getOrdersAllOrders();
  }, []);

  async function handDeleteOrderbyId(orderId) {
    try {
      await featchDeleteIdOrder(orderId);
      console.log("Карточка заказа успешно удалена");
      const updatedOrders = orders.filter((order) => order.id !== orderId);
      setOrders(updatedOrders);
      setError(false);
    } catch (error) {
      console.log("Ошибка при удалении карточки заказа");
    }
  }

  function calculateTotalPrice(services) {
    return services.reduce((total, serviceName) => {
      const service = compareServices.find(
        (item) => item.service === serviceName
      );
      if (service) {
        return total + service.price;
      }
      return total;
    }, 0).toFixed(2); // Округление до 2 знаков после запятой
  }

  console.log(compareServices);
  console.log(orders);

  return (
    <MainWrapper>
      {orders.map((order) => (
        <CardWrapper key={order.id}>
          <CardHeader>
            <CardTitle>{order.fullName}</CardTitle>
            <BtnDelInvoice onClick={() => handDeleteOrderbyId(order.id)}>
              <IconDel size={20} />
            </BtnDelInvoice>
          </CardHeader>
          <CardBody>
            <hr style={{ margin: 0 }} />
            <CardItem>Phone: {order.phoneNumber}</CardItem>
            <CardItem>Email: {order.emailAddress}</CardItem>
            <CardItem>Brand: {order.filteredBrand}</CardItem>
            <CardItem>Model: {order.filteredModel}</CardItem>
            <CardItem>VIN: {order.vinNumber}</CardItem>
            <hr style={{ margin: 0 }} />
            <CardTitle>Services:</CardTitle>
            <ServiceList>
              {order.filteredService.map((service, index) => (
                <React.Fragment key={`${index}_${service}`}>
                  <hr style={{ margin: 0 }} />
                  <ServiceItem>{service}</ServiceItem>
                </React.Fragment>
              ))}
            </ServiceList>
            <hr style={{ margin: 0 }} />
            <CardTitle>
              Price {calculateTotalPrice(order.filteredService)} UAH
            </CardTitle>
          </CardBody>
        </CardWrapper>
      ))}
    </MainWrapper>
  );
};
