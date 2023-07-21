import React, { useState } from 'react';

const fieldStyle = {
  marginBottom: '15px',
};

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
    const requiredFields = formFields.filter((field) => field.required);
    const emptyFields = requiredFields.filter((field) => !carData[field.name]);

    if (emptyFields.length > 0) {
      alert('Please fill in all required fields.');
      return;
    }
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
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',
    }}
    >
      <form className="d-flex flex-column align-items-center g-4" onSubmit={handleSubmit}>
        <h1>Add a New Car</h1>
        {formFields.map((field) => (
          <div key={field.name} style={fieldStyle}>
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
                required={field.required}
              />
            )}
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
