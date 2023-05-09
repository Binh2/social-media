import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component for sign in form
const SignIn = () => {
  // Create state variables to track form inputs and checkbox status
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  return (
    <div className="container container-fluid d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
      <div className="row">
        <div className="col-md-6 d-flex flex-column justify-content-center">
          {/* heading */}
          <h2 className="text-success">SocialSphere</h2>
          {/* Description */}
          <p>Welcome to SocialSphere - the place to connect with new friends and bulid your own.</p>
        </div>
        <div className="col-md-6">
          <p className="title text-center" style={{ fontSize: '17px' }}>
            Sign in to your account
          </p>
          <div className="card">
            <div className="card-body">
              {/* Sign in form */}
              <form className="form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="username">Username:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    id="username"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                  />
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
                  <div className="row justify-content-md-center">
                    <div className="col-md-4">
                      <button type="submit" className="btn btn-success btn-block">
                        Sign In
                      </button>
                    </div>
                  </div>
                  <div className="row justify-content-md-center align-items-center">
                    <div className="col-md-6 d-flex justify-content-start">
                      <p>Don't have an account?</p>
                      <a href="#" className="text-success ml-2" style={{ color: 'darkgreen', marginLeft: 5 }}>
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
