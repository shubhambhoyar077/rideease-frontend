import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth } from '../redux/auths/authsSlice';
import { setAuth, setAdmin } from '../redux/auths/userauthSlice';

const SignIn = () => {
  const { message, isLoading, error } = useSelector((state) => state.auths);
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
  return (
    <div className="sign-container">
      <h3>Sign In</h3>
      <form className="mt-3 container-sm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            id="floatingInput"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
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
            className="btn btn-primary"
            disabled={!isFormValid}
          >
            SignIn
          </button>
          <Link to="/sign_up" className="btn btn-primary">
            SignUp
          </Link>
        </div>
      </form>
      <small>{message}</small>
      <small>{error}</small>
    </div>
  );
};

export default SignIn;