import './App.css';
import { Route, Routes } from 'react-router-dom';
import Cars from './components/Cars';
import Reserve from './components/Reserve';
import MyReservations from './components/MyReservations';
import AddCars from './components/AddCars';
import DeleteCars from './components/DeleteCars';
import Navbar from './components/Navbar';

const App = () => (

  <>
    <Navbar />
    <div className="app">
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/myreservations" element={<MyReservations />} />
        <Route path="/addcars" element={<AddCars />} />
        <Route path="/deletecars" element={<DeleteCars />} />
      </Routes>
    </div>
  </>
);
export default App;
