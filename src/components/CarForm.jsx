import React, { useState } from 'react';
import { useCreateCarMutation, useUpdateCarMutation } from '../services/CarsApi'

const CarForm = ({ car = {}, onSubmit }) => {
  const [name, setName] = useState(car.name || '');
  const [createCar, { isLoading: isCreating, error: createError }] = useCreateCarMutation();
  const [updateCar, { isLoading: isUpdating, error: updateError }] = useUpdateCarMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const carData = { name };

    if (car.id) {
      await updateCar({ id: car.id, ...carData });
    } else {
      await createCar(carData);
    }

    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name:
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button
        type="submit"
        disabled={isCreating || isUpdating}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {car.id ? 'Update' : 'Add'} Car
      </button>
      {createError && <p className="text-red-500 text-xs italic">Error creating car: {createError.message}</p>}
      {updateError && <p className="text-red-500 text-xs italic">Error updating car: {updateError.message}</p>}
    </form>
  );
};

export default CarForm;
