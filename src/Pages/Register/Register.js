import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="container   my-5 py-3 form-style">
             <div className="mt-3 w-50 p-5 shadow">
                <h2>Create <span style={{color:'orange'}}>Account</span> Here!</h2>
                <form >
                    <input  className="input-field mt-3" type="email" name="" id="" placeholder="Your Email" />
                    <br />
                    <input  className="input-field mt-3" type="password" name="" id="" placeholder="Your Password" />
                    <br />
                    <input  className="input-field mt-3" type="password" name="" id="" placeholder="Confirm Password" />
                    <br />
                    <input  className="submit-button mt-3" type="submit" value="Submit" />
                </form>
                <p className="mt-4">Already have an account? <Link to="/login" className="link-style">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;