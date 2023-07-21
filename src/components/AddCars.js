import React from 'react';

import React, { useState } from 'react';

function AddCars() {
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    year: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCarData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(carData);

    setCarData({
      make: '',
      model: '',
      year: '',
    });
  };

  return (
    <div>
      <h1>Add a New Car</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Make:</label>
          <input
            type="text"
            name="make"
            value={carData.make}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={carData.model}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Year:</label>
          <input
            type="text"
            name="year"
            value={carData.year}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Add Car</button>
        </div>
      </form>
    </div>
  );
}

export default AddCars;
