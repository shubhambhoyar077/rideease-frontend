import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setAuth, setAdmin } from './redux/auths/userauthSlice';
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
import ConfirmationPage from './pages/ConfirmationPage';
import SetPassword from './pages/SetPassword';
import Private from './components/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setAuth());
    dispatch(setAdmin());
  }, [dispatch]);

  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/reserve"
              element={(
                <Private>
                  <Reserve />
                </Private>
              )}
            />
            <Route
              path="/myreservations"
              element={(
                <Private>
                  <MyReservations />
                </Private>
              )}
            />
            <Route
              path="/addcars"
              element={(
                <Private>
                  <AddCars />
                </Private>
              )}
            />
            <Route
              path="/deletecars"
              element={(
                <Private>
                  <DeleteCars />
                </Private>
              )}
            />

            {/* Auth pages routes:- */}
            <Route path="/sign_in" element={<SignIn />} />
            <Route path="/sign_up" element={<SignUp />} />
            <Route path="/forget_password" element={<ForgetPassword />} />
            <Route path="/send_conformation" element={<SendConfirmation />} />
            <Route path="/users/confirmation" element={<ConfirmationPage />} />
            <Route path="/users/password/edit" element={<SetPassword />} />
          </Route>
        </Routes>
      </div>
    </>
  );
};
export default App;
