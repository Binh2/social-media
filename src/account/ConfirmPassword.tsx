import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styles from "./styles.module.css";
import {useNavigate} from "react-router-dom"

function ConfirmPassword() {
  const navigate = useNavigate();
  return (

    <div className={styles.wrapper}>
      <div className="container">
        <div className="col-sm-8 offset-sm-2 col-sm-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
          <div className={styles.logo}>
            <img src="/logo192.png" alt="logo" className="img-fluid" />
          </div>

          <form className="rounded bg-white shadow">


            <div style={{ display: 'flex', flexDirection: 'row' }} className="p-3">
              <img src="/logo192.png" alt="logo" style={{ width: '30px', height: '30px' }} />
              <p className="px-2">Website's Name</p>
            </div>

            <div className="px-5">
              <h3 className="text-dark fw-bolder fs-4 mb-2">Confirm Password?  </h3>
              
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="confirm" placeholder="Confirm Code"></input>
                <label htmlFor="confirm">Verification Code</label>
              </div>
              <div className="fw-normal text-muted">
                A verification code has been send to your email address
              </div>

              <button type="submit" className="btn btn-primary submit_btn my-4">Resend Code</button>
              <button type="submit" className="btn btn-secondary submit_btn my-4 ms-3" onClick={()=> navigate('/new-password')}>Continue</button>
            </div>


          </form>

        </div>
      </div>
    </div>
  );

}


export default ConfirmPassword;