import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAuth } from '../redux/auths/authsSlice';

const ConfirmationPage = () => {
  const dispatch = useDispatch();
  const { message, error, isLoading } = useSelector((state) => state.auths);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const confirmationToken = urlParams.get('confirmation_token');
    const data = {
      end_point: `users/confirmation?confirmation_token=${confirmationToken}`,
      method_data: {},
    };
    dispatch(fetchAuth(data));
  }, [dispatch]);

  if (isLoading) {
    return <h1>Confirming Please wait...</h1>;
  }
  return (
    <>
      <h1>{message}</h1>
      <h1>{error}</h1>
      <Link to="/sign_in" className="btn btn-primary">
        Sign In
      </Link>
    </>
  );
};

export default ConfirmationPage;
