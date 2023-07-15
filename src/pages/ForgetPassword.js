import { Link } from 'react-router-dom';
import { useState } from 'react';

const ForgetPassword = () => {
  const [isFormValid, setFormValid] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormValid(Boolean(formData.email));
  };
  return (
    <div className="sign-container">
      <h3>Forget Password</h3>
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
    </div>
  );
};

export default ForgetPassword;
