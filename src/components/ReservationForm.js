import { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAuth } from '../redux/auths/authsSlice';

const ReservationForm = ({ selectedCarId, carSelected }) => {
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
    if (carSelected) {
      formData.service_id = selectedCarId;
    }
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
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
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
        {!carSelected && (
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
        )}
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
  );
};

ReservationForm.propTypes = {
  selectedCarId: PropTypes.number,
  carSelected: PropTypes.bool,
};

ReservationForm.defaultProps = {
  selectedCarId: 0,
  carSelected: false,
};

export default ReservationForm;
