import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchReservations, cancelReservation } from '../redux/reservations/reservationsSlice';
import '../styles/MyReservations.css';

function MyReservations() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReservations());
  }, [dispatch]);

  const reservations = useSelector((state) => state.reservations.reservations);

  const handleCancelReservation = (reservationId) => {
    dispatch(cancelReservation(reservationId));
  };

  return (
    <div className="container">
      <div className="text-center">
        <h1 style={{ padding: '2%' }}>My Reservations</h1>
      </div>
      <div className="row">
        {reservations.map((reservation) => (
          <div className="col-md-11 mb-4" key={reservation.reservation.id}>
            <div className="card flex-md-row">
              <div className="card-body">
                <h5 className="card-title">{reservation.service.name}</h5>
                <p className="card-text">
                  City:
                  {' '}
                  {reservation.reservation.city}
                </p>
                <p className="card-text">
                  Date:
                  {' '}
                  {reservation.reservation.date}
                </p>
                <button
                  className="btn btn-danger"
                  type="button"
                  onClick={() => handleCancelReservation(reservation.reservation.id)}
                >
                  Cancel
                </button>
              </div>
              <img
                src={reservation.service.image}
                className="card-img-right rounded-circle"
                alt={reservation.service.name}
                style={{ width: '20%' }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyReservations;
