import React, { useState } from 'react';

const fieldStyle = {
  marginBottom: '15px',
};

function AddCars() {
  const [carData, setCarData] = useState({
    name: '',
    price: '',
    details: '',
    duration: '',
    image: '',
  });

  const formFields = [
    { name: 'name', label: 'Name' },
    { name: 'price', label: 'Price' },
    { name: 'details', label: 'Details' },
    { name: 'duration', label: 'Duration' },
    { name: 'image', label: 'Image' },
    

  ];

  const handleChange = (e) => {
    setCarData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(carData);
    // implement the logic to submit
    // the form data to your backend or perform other actions.
    const requiredFields = formFields.filter((field) => field.required);
    const emptyFields = requiredFields.filter((field) => !carData[field.name]);

    if (emptyFields.length > 0) {
      alert('Please fill in all required fields.');
      return;
    }
    console.log(carData);
    // Reset the form after submission
    setCarData({
      name: '',
      price: '',
      details: '',
      duration: '',
      image: '',
    });
  };

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
    }}
    >
      <form
        onSubmit={handleSubmit}
        id="car-form"
        className="d-flex flex-column align-items-center g-4"
      >
        <h1>Add a New Car</h1>
        {formFields.map((field) => (
          <div key={field.name} style={fieldStyle}>
            <label htmlFor={field.name}>
              {field.label}
              :
            </label>
              <input
                type="text"
                name={field.name}
                id={field.name}
                value={carData[field.name]}
                onChange={handleChange}
                required={field.required}
              />

          </div>
        ))}
        <div>
          <button type="submit" className="btn btn-light text-success">Add Car</button>
        </div>
      </form>
    </div>
  );
}

export default AddCars;
