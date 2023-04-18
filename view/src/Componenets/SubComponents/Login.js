import React from 'react';
import '../../CSS/Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="image-container">
        <img src={require('../../Assest/Login.jpg')} alt="Login" />
      </div>
      <div className="form-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/signup">Signup</a></p>
      </div>
    </div>
  );
}

export default Login;
