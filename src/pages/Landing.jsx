import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

const Landing = () => {
  return (
    <>
      <div>Landing Page</div>
      <RouterLink to="/login">Login</RouterLink>
    </>
  );
};

export default Landing;
