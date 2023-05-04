import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// Component for sign in form
const SignIn = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          {/* heading */}
          <h2>Sign In</h2>
          {/* Description */}
          <p>Please enter your username and password to sign in.</p>
        </div>
        <div className="col-md-6">
          {/* Sign in form */}
          <form className="form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" className="form-control" name="username" id="username" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" className="form-control" name="password" id="password" />
            </div>
            {/* Forgot password link */}
              <a href="#" className="float-right" >Forgot password?</a>
            {/* Sign In and Create New Account buttons */}
            <div className="row">
              <div className="col-md-6"><button type="submit" className="btn btn-primary">Sign In</button> </div>
            </div>
            <div className="row">
              <div className="col-md-6"><a href="#">Create a new account</a></div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
// Export SignIn component
export default SignIn;