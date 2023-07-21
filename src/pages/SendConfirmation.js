import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuth } from '../redux/auths/authsSlice';

const SendConfirmation = () => {
  const { message, error } = useSelector((state) => state.auths);
  const dispatch = useDispatch();
  const [isFormValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      end_point: 'users/confirmation',
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
    setFormValid(Boolean(formData.email));
  };
  return (
    <div className="sign-container">
      <h3>Send configuration email again</h3>
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
        <div className="d-flex gap-3">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!isFormValid}
          >
            Send email
          </button>
          <Link to="/sign_in" className="btn btn-primary">
            SignIn
          </Link>
        </div>
      </form>
      <small className="text-danger">{message}</small>
      <small>{error}</small>
    </div>
  );
};

export default SendConfirmation;
