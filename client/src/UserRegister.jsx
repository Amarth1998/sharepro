import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

const UserRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

 
//   const navigate = useNavigate(); // Initialize useNavigate

  const Signup = async () => {
    let item = { name, email, password };
    try {
      let result =await fetch("http://127.0.0.1:8000/api/userregister",{
        method: "POST",
        body:JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          "Accept":'application/json'}
      })

 result =await result.json()
      setMessage('User registered successfully'); 
      console.log('Response:', result);
      
    } catch (error) {
      setMessage('Error registering user'); 
      console.error('Error:', error.result ? error.result : error.message);
    }
  };

  return (
    <div className='userregiter'> <br />
      <h1>User Register</h1><br />
      <input required
        onChange={(e) => setName(e.target.value)}  value={name}  type='text'   placeholder='Name'/> <br /> <br />
      <input required
        onChange={(e) => setEmail(e.target.value)}  value={email}  type='email'    placeholder='Email'/> <br /> <br />
      <input required
        onChange={(e) => setPassword(e.target.value)}  value={password}  type='password'    placeholder='Password' /> <br /> <br />
      <button onClick={Signup} >Sign Up</button>
      
      {/* Display success/error messages */}
      {message && <p>{message}</p>}
    </div>
  );
};

export default UserRegister;
