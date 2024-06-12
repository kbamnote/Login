import './LoginPage.css'
import React, { useState } from 'react';


const SignInAccess = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add login logic here
    console.log('Login submitted:', email, password);
  };

  return (
    <div className="container">
      <h2>Sign In Access</h2>
      <p>You must become a member to login and access the entire site. </p> 
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Enter email address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter Password"
          />
        </div>
        <div className="forgot-password">
          <a href="#">Forgot Password</a>
        </div>
        <button type="submit">SIGN IN</button>
        <div className="signup">
          <p>Not a member yet? <a href="#">Sign Up</a></p>
        </div>
      </form>
    </div>
  );
};

export default SignInAccess;