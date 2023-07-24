import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchReservations,
  cancelReservation,
} from '../redux/reservations/reservationsSlice';
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
    <section className="res-container">
      <div>
        <h1>My Reservations</h1>
      </div>
      <div className="res-details">
        {reservations.map((reservation) => (
          <div key={reservation.reservation.id}>
            <div className="reservation">
              <div className="res-texts">
                <h5>{reservation.service.name}</h5>
                <p>
                  City:
                  {reservation.reservation.city}
                </p>
                <p>
                  Date:
                  {reservation.reservation.date}
                </p>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => handleCancelReservation(reservation.reservation.id)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyReservations;
