import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCarDetails } from '../redux/details/detailsSlice';
import '../styles/CarDetails.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CarDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const car = useSelector((state) => state.details.carDetails);

  useEffect(() => {
    dispatch(fetchCarDetails(id));
  }, [dispatch, id]);

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <div className="car-details-container container">
      <div className="row">
        <div className="car-details-image col-6">
          <img src={car.image} alt={car.name} className="big-image" />
        </div>
        <div className="car-details-info col-6">
          <h2>{car.name}</h2>
          <p>
            <span>Price:</span>
            {' '}
            <span>
              {' '}
              {car.price}
            </span>
          </p>
          <p>
            <span>Details:</span>
            {' '}
            <span>
              {' '}
              {car.details}
            </span>
          </p>
          <p>
            <span> Duration:</span>
            {' '}
            <span>
              {' '}
              {car.duration}
            </span>
          </p>
          <button type="button" className="btn btn-primary">
            <i className="fa fa-tag" />
            {' '}
            Reserve
          </button>
        </div>

      </div>

    </div>
  );
}

export default CarDetails;
