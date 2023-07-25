import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchAuth } from '../redux/auths/authsSlice';

function AddCars() {
  const navigate = useNavigate();
  const [carData, setCarData] = useState({
    name: '',
    price: '',
    details: '',
    duration: '',
    image: '',
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setCarData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      end_point: '/api/services',
      method_data: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ service: carData }),
      },
    };
    dispatch(fetchAuth(data)).then(() => {
      navigate('/');
    });

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
    <div>
      <form
        onSubmit={handleSubmit}
        id="car-form"
        className="d-flex flex-column align-items-center g-4"
      >
        <h1>Add a New Car</h1>

        <input
          type="text"
          name="name"
          className="form-control mb-3"
          id="name"
          placeholder="Enter Car Name"
          value={carData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          className="form-control mb-3"
          id="image"
          placeholder="Enter Car Image URL"
          value={carData.image}
          onChange={handleChange}
          required
        />

        <textarea
          name="details"
          className="form-control mb-3"
          id="details"
          placeholder="Enter Car Details"
          value={carData.details}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          className="form-control mb-3"
          id="price"
          placeholder="Enter Car Price"
          value={carData.price}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="duration"
          className="form-control mb-3"
          id="duration"
          placeholder="Enter Car Ride Duration"
          value={carData.duration}
          onChange={handleChange}
          required
        />

        <div>
          <button type="submit" className="btn btn-primary">
            Add Car
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddCars;
