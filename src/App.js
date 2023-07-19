import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Reserve from './components/Reserve';
import MyReservations from './components/MyReservations';
import AddCars from './components/AddCars';
import DeleteCars from './components/DeleteCars';
import Navbar from './components/Navbar';
import CarDetails from './components/CarDetails'; // Import CarDetails component

const App = () => (
  <>
    <Navbar />
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/myreservations" element={<MyReservations />} />
        <Route path="/addcars" element={<AddCars />} />
        <Route path="/deletecars" element={<DeleteCars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
      </Routes>
    </div>
  </>
);

export default App;
