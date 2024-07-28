import React from 'react';
import { useGetCarByIdQuery } from '../services/CarsApi';

const CarDetail = ({ id }) => {
  const { data: car, error, isLoading } = useGetCarByIdQuery(id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Car Detail</h2>
      <p>ID: {car.id}</p>
      <p>Name: {car.name}</p>
    </div>
  );
};

export default CarDetail;
