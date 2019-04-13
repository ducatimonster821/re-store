import React from 'react';
import {BookstoreServiceConsumer} from '../bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {
  // withBookstoreService, это будет функция, которая возвращает функцию, которая принимает компонент, который мы будем оборачивать.
  // В компоненте высего порядка мы создаем новый компонент.
  // Для того чтобы получить данные из BookstoreServiceConsumer, нам нужно передать в него render функцию, это функция, которая примет в качестве своего значения тот service, который мы передадим через context.
  // bookstoreservice - это именно тот service, который мы будем передавать

  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return (<Wrapped {...props} bookstoreService={bookstoreService}/>);
          }
        }
      </BookstoreServiceConsumer>
    );
  };
};

export default withBookstoreService;
