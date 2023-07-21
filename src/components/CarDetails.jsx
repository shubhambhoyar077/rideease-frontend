import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { IoCarSportSharp } from 'react-icons/io5';
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
    <div className="car-details-container container-lg mt-5">
      <div className="car-details-img">
        <img src={car.image} alt={car.name} className="big-image" />
      </div>
      <div className="car-details-info">
        <h1>{car.name}</h1>
        <p>
          <span>{car.details}</span>
        </p>
        <p className="car-details-infos">
          <span>Price:</span> <span> {car.price}</span>
        </p>
        <p className="car-details-infos">
          <span> Duration:</span> <span> {car.duration}</span>
        </p>
        <Link to={`/car/${id}/reserve`} className="btn-res">
          <IoCarSportSharp /> Reserve
        </Link>
      </div>
    </div>
  );
}

export default CarDetails;
