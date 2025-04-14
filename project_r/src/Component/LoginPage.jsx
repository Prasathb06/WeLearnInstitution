import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css'; // Ensure your CSS file is correctly imported

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!email) {
      newErrors.email = "Email is required";
    }
    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setLoading(true); // Set loading to true

    try {
      const result = await axios.post("http://localhost:4000/user/login", { email, password });
      setLoading(false); // Set loading to false
      if (result.data.userFound) { 
        alert("Login Successfully");
        navigate("/");
      } else {
        setErrors({ login: "Invalid email or password" });
      }
    } catch (err) {
      setLoading(false); // Set loading to false
      console.error(err);
      setErrors({ login: "Login Failed" });
    }
  };

  return (
    <div className="log">
      <form className='form1' onSubmit={handleLogin}>
        <h1 className='header'>Login</h1>
        <input
          className='user1'
          type='text'
          name='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        {errors.email && <div style={{ color: "red", margintop:"0px" }}>{errors.email}</div>}
        <input
          className='pass1'
          type='password'
          name='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br />
        {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
        {errors.login && <div style={{ color: "red" }}>{errors.login}</div>}
        <button className='btn-1' type='submit' disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
        <p className="reg text-black">
          Don't have an account? <a href="./register"><b>Register</b></a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
