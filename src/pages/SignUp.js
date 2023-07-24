import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth } from '../redux/auths/authsSlice';
import '../styles/sign.css';

const SignUp = () => {
  const { message, error } = useSelector((state) => state.auths);
  const dispatch = useDispatch();
  const [isFormValid, setFormValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordMatch, setPasswordMatch] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      end_point: 'users',
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
    setFormValid(
      Boolean(formData.name)
        && Boolean(formData.email)
        && Boolean(formData.password),
    );
    if (e.target.name === 'confirmPassword') {
      setConfirmPassword(e.target.value);
      setPasswordMatch(e.target.value === formData.password);
    } else if (e.target.name === 'password') {
      setPasswordMatch(e.target.value === confirmPassword);
    }
  };
  return (
    <section className="sign-container">
      <h3>Welcome to RideEase</h3>
      <p>Sign up to get started</p>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <div className="input-container">
          <input
            type="Name"
            name="name"
            className="form-input"
            id="exampleInputname"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-container">
          <input
            type="email"
            name="email"
            className="form-input"
            id="exampleInputEmail1"
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
        <div className="input-container">
          <input
            type="password"
            name="confirmPassword"
            className="form-input"
            id="exampleInputPassword1"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleChange}
            style={{ borderColor: isPasswordMatch ? 'green' : 'red' }}
          />
        </div>
        <div className="d-flex gap-3">
          <button
            type="submit"
            className="sign-up-btn"
            disabled={!isFormValid}
          >
            SignUp
          </button>
        </div>
        <p>
          Already Have an Account?
          <Link to="/sign_in" className="sign-in-link">
            Sign In
          </Link>
        </p>
      </form>
      <small className="text-danger">{message}</small>
      <small>{error}</small>
    </section>
  );
};

export default SignUp;
