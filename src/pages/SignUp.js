// import { Link } from 'react-router-dom';
import { useState } from 'react';

const SignUp = () => {
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
    console.log(formData);
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
    <form className="mt-3 container-sm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          type="Name"
          name="name"
          className="form-control"
          id="exampleInputname"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <input
          type="email"
          name="email"
          className="form-control"
          id="exampleInputEmail1"
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
      <div className="mb-3">
        <input
          type="password"
          name="confirmPassword"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={handleChange}
          style={{ borderColor: isPasswordMatch ? 'green' : 'red' }}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={!isFormValid}>
        SignUp
      </button>
    </form>
  );
};

export default SignUp;
