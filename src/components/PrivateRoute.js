import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

function Private({ children }) {
  const { isAuth } = useSelector((state) => state.userAuth);
  if (!isAuth) {
    return <Navigate to="/sign_in" replace />;
  }
  return children;
}

Private.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Private;
