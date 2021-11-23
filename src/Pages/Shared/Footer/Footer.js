import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer-container">
                <div className="container">
                    <div className="row d-flex">
                    <div className="col-md-5 col-12">
                        <div className="left-container text-start">
                        <h1 className="text-anim"><span style={{color:'orange'}}>Gym</span><span style={{color:'#0dd6b8'}}>Heros</span></h1>
                        <p className="mt-4 ">
                            <small>
                              GymHeros ensures you to make you healthy and fit.
                            </small>
                        </p>
        
                        <p className="mt-5">
                            <small>GymHeros © . All rights reserved.</small>
                        </p>
                        </div>
                    </div>
                    <div className="col-md-2  col-12">
                        <div className="footer-menu-container">
                        <ul>
                            <li className="footer-menu">Home</li>
                            <li className="footer-menu">About</li>
                            <li className="footer-menu">Services</li>
                            <li className="footer-menu">Trainers</li>
                        </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="right-footer-container">
                        <h3>For any enquiry</h3>
                        <input
                            className="footer-input"
                            type="text"
                            placeholder="Enter Email"
                        />
                        <div className="phone d-flex align-items-center justify-content-center mt-4">

                            <div>
                            <h5>+1 8 800 999 35 35</h5>
                            </div>
                        </div>
                        <div className="map d-flex align-items-center justify-content-center">
                            <div>
                            <p>
                                102 1st Avenue, New York, NY 100
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;