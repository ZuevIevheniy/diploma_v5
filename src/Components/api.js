import axios from 'axios';

axios.defaults.baseURL = 'https://664255963d66a67b3437100d.mockapi.io/service-car/';

export const fetchOrderCarAll = async () => {
  const response = await axios.get('/services');
  return response.data;
};

// export const fetchQuizById = async quizId => {
//   const response = await axios.get(`/quiz/${quizId}`);
//   return response.data;
// };

export const fetchAddOrderCar = async newOrderCar => {
  const response = await axios.post('/orders', newOrderCar);
  return response.data;
};

export const fetchGetAllOrder = async () => {
  const response = await axios.get('/orders');
  return response.data;
};

export const featchDeleteIdOrder = async (deleteIdOrder) =>{
  const response = await axios.delete(`/orders/${deleteIdOrder}`)
  return response.data;
}


// export const deleteQuizById = async quizId => {
//   const response = await axios.delete(`/quiz/${quizId}`);
//   return response.data;
// };

// export const updateQuiz = async (updateId, update) => {
//   const response = await axios.delete(`/quiz/${updateId}`, update);
//   return response.data;
// };
