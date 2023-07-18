import '../styles/reservation.css';
import ReservationForm from './ReservationForm';

// const selectedCar = cars.find((obj) => obj.id === formData.service_id);
// const formStyle = {
//   backgroundImage: `url(${selectedCar && selectedCar.image})`,
//   backgroundSize: 'contain',
//   backgroundPosition: 'center',
//   backgroundRepeat: 'no-repeat',
// };
const Reserve = () => (
  <div className="reservation-container">
    <h1>Create New Reservation</h1>
    <ReservationForm />
  </div>
);
export default Reserve;
