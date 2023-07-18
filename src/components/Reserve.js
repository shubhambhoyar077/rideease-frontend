import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAuth } from '../redux/auths/authsSlice';

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

  return (
    <form
      onSubmit={handleSubmit}
      id="reservation-form"
      className="d-flex flex-column align-items-center g-6"
    >
      <label htmlFor="userId">
        Name:
        <input
          className="p-2 form-control"
          type="text"
          value={fullName}
          disabled
        />
      </label>
      <label htmlFor="ServiceId">
        <div className="select-wrapper">
          <select
            className="p-2 px-0"
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
          <i className="fa-solid fa-angle-down" />
        </div>
      </label>
      <label htmlFor="locationId">
        <div className="select-wrapper">
          <select
            className="p-2 px-0"
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
          <i className="fa-solid fa-angle-down" />
        </div>
      </label>
      <label htmlFor="startDate">
        Date:&nbsp;
        <input
          className="p-2 form-control"
          type="date"
          value={formData.date}
          onChange={handleChange}
          name="date"
        />
      </label>
      <button type="submit" className="btn btn-light text-success">
        Create Reservation
      </button>
    </form>
  );
};

export default Reserve;
