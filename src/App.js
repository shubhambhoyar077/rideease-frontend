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
        <Route path="/sign_in" element={<SignIn />} />
        <Route path="/sign_up" element={<SignUp />} />
      </Routes>
    </div>
  </>
);
export default App;
