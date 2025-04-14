import React, { useState } from 'react';
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const checkEmail = "arun@gmail.com";
  const checkPassword = "1234";

  const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  };

  const validateInputs = (email, password) => {
    let isValid = true;

    if (email === '') {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Email is required' }));
      isValid = false;
    } else if (email !== checkEmail || !validateEmail(email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Enter a valid email' }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }

    if (password === '') {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
      isValid = false;
    } else if (password !== checkPassword) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Enter a valid password' }));
      isValid = false;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInputs(email, password)) {
      window.location.href = "/AdminCon";
    }
  };

  return (
    <div className="Alog">
      <form className='Aform1' action='' method='post' onSubmit={handleSubmit}>
        <h1 className='headerL'>Login</h1>
        <div className='input-group'>
          <input
            className='Auser'
            type='text'
            name='username'
            placeholder='username'
            id='inputEmail'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br></br>
          <div className='error'>{errors.email}</div>
        </div>
        <div className='input-group'>
          <input
            className='Apass'
            type='password'
            name='password'
            placeholder='password'
            id='inputPassword'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br></br>
          <div className='error'>{errors.password}</div>
        </div>
        <input className='Abtn-1' type='submit' value='login' />
      </form>
    </div>
  );
};

export default Login;