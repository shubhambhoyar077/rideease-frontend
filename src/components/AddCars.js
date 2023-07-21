import React, { useState } from 'react';

function AddCars() {
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    year: '',
    image: null,
  });

  const formFields = [
    { name: 'make', label: 'Make' },
    { name: 'model', label: 'Model' },
    { name: 'year', label: 'Year' },
    { name: 'image', label: 'Image' },
  ];

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const newValue = type === 'file' ? e.target.files[0] : value;
    setCarData((prevState) => ({ ...prevState, [name]: newValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // implement the logic to submit
    // the form data to your backend or perform other actions.
    console.log(carData);
    // Reset the form after submission
    setCarData({
      make: '',
      model: '',
      year: '',
      image: null,
    });
  };

  return (
    <div>
      <h1>Add a New Car</h1>
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name}>
              {field.label}
              :
            </label>
            {field.name === 'image' ? (
              <input
                type="file"
                name={field.name}
                id={field.name}
                onChange={handleChange}
              />
            ) : (
              <input
                type="text"
                name={field.name}
                id={field.name}
                value={carData[field.name]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <div>
          <button type="submit">Add Car</button>
        </div>
      </form>
    </div>
  );
}

export default AddCars;
