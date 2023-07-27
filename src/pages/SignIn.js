import { Link, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth } from '../redux/auths/authsSlice';
import { setAuth, setAdmin } from '../redux/auths/userauthSlice';

const SignIn = () => {
  const { message, isLoading, error } = useSelector((state) => state.auths);
  const { isAuth } = useSelector((state) => state.userAuth);
  const dispatch = useDispatch();
  const [isFormValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    dispatch(setAuth());
    dispatch(setAdmin());
  }, [dispatch, isLoading]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      sign_in: true,
      end_point: 'users/sign_in',
      method_data: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user: formData }),
      },
    };
    dispatch(fetchAuth(data));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormValid(Boolean(formData.email) && Boolean(formData.password));
  };
  if (isAuth) {
    return <Navigate to="/" />;
  }
  return (
    <div className="sign-container">
      <h3>Welcome to RideEase</h3>
      <p>Login in to get started</p>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="email"
            name="email"
            className="form-input"
            id="floatingInput"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            name="password"
            className="form-input"
            id="exampleInputPassword1"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-between mb-3">
          <Link to="/forget_password">Forget Password?</Link>
          <Link to="/send_conformation">Confirmation email?</Link>
        </div>
        <div className="d-flex gap-3">
          <button
            type="submit"
            className="sign-up-btn"
            disabled={!isFormValid}
          >
            SignIn
          </button>
        </div>
        <p>
          Don not Have an Account?
          <Link to="/sign_up" className="sign-in-link">
            SignUp
          </Link>
        </p>
      </form>
      <small className="text-danger">{message}</small>
      <small>{error}</small>
    </div>
  );
};

export default SignIn;
