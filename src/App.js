import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Reserve from './components/Reserve';
import MyReservations from './components/MyReservations';
import AddCars from './components/AddCars';
import DeleteCars from './components/DeleteCars';
import Navbar from './components/Navbar';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ForgetPassword from './pages/ForgetPassword';
import SendConfirmation from './pages/SendConfirmation';

const App = () => (
  <>
    <Navbar />
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/myreservations" element={<MyReservations />} />
        <Route path="/addcars" element={<AddCars />} />
        <Route path="/deletecars" element={<DeleteCars />} />

        {/* Auth pages routes:- */}
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="/forget_password" element={<ForgetPassword />} />
        <Route path="/send_conformation" element={<SendConfirmation />} />
      </Routes>
    </div>
  </>
);
export default App;
