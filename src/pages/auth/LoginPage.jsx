import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loginformik from '../../components/container/pure/forms/LoginFormik';


const LoginPage = () => {
  const [credentials, setCreadentials] = useState(null);
  const navigate = useNavigate();
  const user = localStorage.getItem('user') || null;

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  });
  useEffect(() => {
    if (credentials) {
      const c = JSON.stringify(credentials);
      localStorage.setItem('user', c);
      navigate('/dashboard');
    }
  });

  return (
    <>
      <Loginformik onSubmit={(e) => setCreadentials(e)} />
      
    </>
  );
};

export default LoginPage;