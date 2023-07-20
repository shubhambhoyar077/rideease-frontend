import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
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
      <div className="car-details-container">
        <div className="car-details-img">
          <img src={car.image} alt={car.name} className="big-image" />
        </div>
        <div className="car-details-info">
          <h2>{car.name}</h2>
          <p>
            <span>
              {car.details}
            </span>
          </p>
          <p className="car-details-infos">
            <span>Price:</span>
            {' '}
            <span>
              {' '}
              {car.price}
            </span>
          </p>
          <p className="car-details-infos">
            <span> Duration:</span>
            {' '}
            <span>
              {' '}
              {car.duration}
            </span>
          </p>
          <Link to={`/car/${id}/reserve`} className="btn">
            <i className="fa fa-tag" />
            {' '}
            Reserve
          </Link>
        </div>
      </div>
  );
}

export default CarDetails;
