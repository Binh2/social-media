import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import passwordIcon from './password-icon.jpg'
import emailAndPhone from './email-phone-icon.png'

// Component for sign in form
const SignIn = () => {
  // Create state variables to track form inputs and checkbox status
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Handle form submission
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform form validation
    if (username && password) {
      setSubmitted(true);
    } else {
      alert('Please enter a valid username and password.');
    }
  };

  // Toggle rememberMe state whenever checkbox is clicked
  const handleCheckbox = () => {
    setRememberMe(!rememberMe);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="container container-fluid d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="row">
        <div className="col-sm-5 d-flex flex-column justify-content-center">
          {/* heading */}
          <h2 className="text-success">SocialSphere</h2>
          {/* Description */}
          <p style={{ fontWeight: 'bold' }}>Welcome to SocialSphere - the place to connect with new friends and bulid your own.</p>
        </div>
        <div className="col-sm-7">
          <p className="title text-center" style={{ fontSize: '17px' }}>
            Sign in to your account
          </p>
          <div className="card">
            <div className="card-body">
              {/* Sign in form */}
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group my-4">
                  {/* <label htmlFor="username">Email or phone number:</label> */}
                  <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder='Email address or phone number'
                    required
                    style={{ 
                      backgroundImage: `url(${emailAndPhone})`, 
                      backgroundSize: '25px 25px', backgroundRepeat: 'no-repeat', 
                      backgroundPosition: 'left 10px center', 
                      paddingLeft: '40px' 
                    }}
                  />
                  </div>
                </div>
                <div className="form-group my-4">
                  {/* <label htmlFor="password">Password:</label> */}
                  <div className="input-group">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder='Password'
                      required
                      style={{
                         backgroundImage: `url(${passwordIcon})`, 
                         backgroundSize: '25px 25px', 
                         backgroundRepeat: 'no-repeat', 
                         backgroundPosition: 'left 10px center', 
                         paddingLeft: '40px'
                         }}
                    />
                     {/* <div className="form-control-feedback">
                    <img src={passwordIcon} alt="Password" />
                  </div> */}
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        onClick={togglePasswordVisibility}
                      >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                      </button>
                    </div>
                  </div>
                  </div>
                  {/* Remember me checkbox */}
                  <div className="form-group d-flex justify-content-between align-items-center">
                    <div className="form-check d-flex align-items-center">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="rememberMe"
                        checked={rememberMe}
                        onChange={handleCheckbox}
                      />
                      <label className="form-check-label" htmlFor="rememberMe">
                        Remember me
                      </label>
                    </div>
                    <a href="#" className="float-right">
                      Forgot password?
                    </a>
                  </div>
                  {/* Sign in and Create New Account buttons */}
                  <div className="form-group">
                    <div className="row justify-content-sm-center">
                      <div className="col-sm-3">
                        <button type="submit" className="btn btn-success btn-block">
                          Sign In
                        </button>
                      </div>
                    </div>
                    <div className="row justify-content-sm-center align-items-center">
                      <div className="col-sm-6 d-flex justify-content-start">
                        <p>Don't have an account?</p>
                        <a href="#" className="text-success" style={{ color: 'darkgreen', marginLeft: 5 }}>
                          Create
                        </a>
                      </div>
                    </div>
                  </div>
              </form>
              {/* Show success message if form was submitted */}
              {submitted && (
                <div className="alert alert-success mt-3" role="alert">
                  Logged in successfully!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
