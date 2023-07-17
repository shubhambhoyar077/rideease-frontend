import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAuth } from '../redux/auths/authsSlice';

const SetPassword = () => {
  const dispatch = useDispatch();
  const [isFormValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
    password: '',
    password_confirmation: '',
    reset_password_token: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    formData.reset_password_token = urlParams.get('reset_password_token');
    const data = {
      end_point: 'users/password',
      method_data: {
        method: 'PUT',
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
      Boolean(formData.password) && Boolean(formData.password_confirmation),
    );
  };
  return (
    <div className="sign-container">
      <h3>Forget Password</h3>
      <form className="mt-3 container-sm" onSubmit={handleSubmit}>
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
        <div className="mb-3">
          <input
            type="password"
            name="password_confirmation"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Confirm Password"
            value={formData.password_confirmation}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex gap-3">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isFormValid}
          >
            Change Password
          </button>
          <Link to="/sign_in" className="btn btn-primary">
            SignIn
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SetPassword;
