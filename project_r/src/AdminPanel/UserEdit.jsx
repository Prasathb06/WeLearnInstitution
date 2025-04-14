import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './UserEdit.css';

const UserEdit = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:4000/user/${id}`)
      .then(response => response.json())
      .then(user => {
        setUsername(user.username);
        setEmail(user.email);
        setContact(user.contact);
      })
      .catch(error => {
        console.error("There was an error fetching the user data!", error);
        setErrors(prevErrors => ({ ...prevErrors, fetch: "Failed to fetch user data" }));
      });
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!username) {
      newErrors.username = "Username is required";
    } else if (username.length < 3) {
      newErrors.username = "Username must be at least 3 characters long";
    }

    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!contact) {
      newErrors.contact = "Contact is required";
    } else if (contact.length < 10) {
      newErrors.contact = "Contact must be at least 10 characters long";
    }

    if (password && password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`http://localhost:4000/user/update/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, email, contact, password })
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        navigate("/");
      } else {
        setErrors({ update: "Failed to update user" });
        console.error("There was an error updating the user!", data);
      }
    } catch (error) {
      setLoading(false);
      setErrors({ update: "Failed to update user" });
      console.error("There was an error updating the user!", error);
    }
  };

  return (
    <div className="update">
      <form className='form' onSubmit={handleUpdate}>
        <h1 className='header'>Update User</h1>
        <div className='input-group'>
          <input className='input' type='text' name='username' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} /><br />
          {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
        </div>
        <div className='input-group'>
          <input className='input' type='text' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} /><br />
          {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
        </div>
        <div className='input-group'>
          <input className='input' type='text' name='contact' placeholder='Contact' value={contact} onChange={(e) => setContact(e.target.value)} /><br />
          {errors.contact && <div style={{ color: "red" }}>{errors.contact}</div>}
        </div>
        <div className='input-group'>
          <input
            className='input' type='password' name='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /><br />
          {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
        </div>
        {errors.update && <div style={{ color: "red" }}>{errors.update}</div>}
        {errors.fetch && <div style={{ color: "red" }}>{errors.fetch}</div>}
        <button className='btn' type='submit' disabled={loading}>
          {loading ? 'Updating...' : 'Update'}
        </button>
      </form>
    </div>
  );
};

export default UserEdit;
