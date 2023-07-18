import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAuth } from '../redux/auths/authsSlice';
import '../styles/reservation.css';

const Reserve = () => {
  const fullName = localStorage.getItem('name');
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars) || [];

  const [formData, setFormData] = useState({
    city: '',
    date: '',
    service_id: '',
  });
  const locations = [
    { id: 1, name: 'Landon' },
    { id: 2, name: 'New York' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      end_point: '/api/reservations',
      method_data: {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('authToken'),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ reservations: formData }),
      },
    };
    dispatch(fetchAuth(data));
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const selectedCar = cars.find((obj) => obj.id === formData.service_id);
  // const formStyle = {
  //   backgroundImage: `url(${selectedCar && selectedCar.image})`,
  //   backgroundSize: 'contain',
  //   backgroundPosition: 'center',
  //   backgroundRepeat: 'no-repeat',
  // };

  return (
    <div className="reservation-container">
      <h1>Create New Reservation</h1>
      <form
        onSubmit={handleSubmit}
        id="reservation-form"
        className="d-flex flex-column align-items-center g-4"
      >
        <input
          className="form-control mb-3"
          type="text"
          value={fullName}
          disabled
        />
        <div className="row g-2 mb-3">
          <div className="col select-wrapper">
            <select
              className="form-select"
              value={formData.service_id}
              onChange={handleChange}
              name="service_id"
            >
              <option value="">Select a service</option>
              {cars.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col select-wrapper">
            <select
              className="form-select"
              value={formData.city}
              onChange={handleChange}
              name="city"
            >
              <option value="">Select a location</option>
              {locations.map((location) => (
                <option key={location.id} value={location.name}>
                  {location.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <input
          className="form-control mb-3"
          type="date"
          value={formData.date}
          onChange={handleChange}
          name="date"
        />
        <button type="submit" className="btn btn-light text-success">
          Create Reservation
        </button>
      </form>
    </div>
  );
};

export default Reserve;
