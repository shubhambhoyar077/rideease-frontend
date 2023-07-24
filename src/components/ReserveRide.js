import '../styles/reservation.css';
import { useParams, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReservationForm from './ReservationForm';

const ReserveRide = () => {
  const { id } = useParams();
  const cars = useSelector((state) => state.cars.cars) || [];
  const selectedCar = cars.find((car) => car.id === parseInt(id, 10));
  console.log(id);
  if (!selectedCar) {
    return <Navigate to={`/car/${id}`} />;
  }
  return (
    <div
      className="reservation-container"
      style={{ backgroundImage: `url(${selectedCar && selectedCar.image})` }}
    >
      <h1>
        {selectedCar.name}
        {' '}
        Test-Ride
      </h1>
      <ReservationForm selectedCarId={id} carSelected />
    </div>
  );
};
export default ReserveRide;
