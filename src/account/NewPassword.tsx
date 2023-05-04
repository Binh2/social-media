import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import styles from "./styles.module.css";
import {useNavigate} from "react-router-dom"

function NewPassword() {

    return (
        <div className={styles.wrapper}>
            <div className="container">
                <div className="col-sm-8 offset-sm-2 col-sm-6 offset-lg-3 col-xl-4 offset-xl-4 text-center">
                    <div className="logo">
                        <img src="/logo192.png" alt="logo" className="img-fluid" />
                    </div>
                    <form className="rounded bg-white shadow">


                        <div style={{ display: 'flex', flexDirection: 'row' }} className="p-3">
                            <img src="/logo192.png" alt="logo" style={{ width: '30px', height: '30px' }} />
                            <p className="px-2">Website's Name</p>
                        </div>


                        <div className="px-5">

                            <h3 className="text-dark fw-bolder fs-4 mb-2">New Your Password      </h3>

                            <div className="fw-normal text-muted mb-4">
                                Already have reset your password? <a href="#" className="text-primary fw-bold text-decoration-none">Sign In</a>
                            </div>

                            <div className="form-floating mb-3 ">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                                <label htmlFor="floatingPassword">Password</label>
                                <span className={styles.left} > Use 8 or more characters</span>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="password" className="form-control" id="floatingPassword" placeholder="Password"></input>
                                <label htmlFor="floatingPassword">Confirm Password</label>
                            </div>

                            <button type="submit" className="btn btn-primary submit_btn my-4" >Submit</button>
                        </div>


                    </form>

                </div>
            </div>
        </div>
    );

}


export default NewPassword;