import React, { useState } from 'react';
import CarList from './components/CarList';
import CarForm from './components/CarForm';
import Navbar from './components/Navbar';

const App = () => {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto p-4">
        <button
          onClick={() => setFormVisible(true)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        >
          Add Car
        </button>
        {formVisible && <CarForm onSubmit={() => setFormVisible(false)} />}
        <CarList />
      </div>
    </div>
  );
};

export default App;
