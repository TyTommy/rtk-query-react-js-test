import React from 'react';
import { useGetCarsQuery, useDeleteCarMutation } from '../services/CarsApi';

const CarList = () => {
  const { data: cars, error, isLoading, refetch } = useGetCarsQuery();
  const [deleteCar, { isLoading: isDeleting, error: deleteError }] = useDeleteCarMutation();

  const handleDelete = async (id) => {
    await deleteCar(id);
    refetch();
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Car List</h2>
      <ul className="space-y-2">
        {cars.map((car) => (
          <li key={car.id} className="flex justify-between items-center bg-white p-4 rounded shadow">
            {car.name}
            <button
              onClick={() => handleDelete(car.id)}
              disabled={isDeleting}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {deleteError && <p className="text-red-500 text-xs italic">Error deleting car: {deleteError.message}</p>}
    </div>
  );
};

export default CarList;
