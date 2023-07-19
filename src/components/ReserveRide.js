import '../styles/reservation.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ReservationForm from './ReservationForm';

const ReserveRide = () => {
  const { id } = useParams();
  const cars = useSelector((state) => state.cars.cars) || [];
  const selectedCar = cars.find((car) => car.id === parseInt(id, 10));
  return (
    <div
      className="reservation-container"
      style={{ backgroundImage: `url(${selectedCar && selectedCar.image})` }}
    >
      <h1>
        Book a
        {selectedCar.name}
        {' '}
        Test-Ride
      </h1>
      <ReservationForm selectedCarID={selectedCar.id} carSelected />
    </div>
  );
};
export default ReserveRide;
