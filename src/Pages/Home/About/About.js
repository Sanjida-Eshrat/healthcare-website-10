import React from 'react';
import { Button} from 'react-bootstrap';
import about from '../../../images/about.jpg'
const About = () => {
    return (
        <div className="container-fluid my-5 p-5" id="about">
            <div className="row d-flex">
            
                <div className="col-lg-6 col-md-12">
                    <img src={about} alt="" className="img-fluid"/>
                </div>
                <div className="col-lg-6 col-md-12 mt-5 text-start">
                    <h2><span style={{color:'orange'}}>About</span> Us</h2>
                    <p>GymHeros is a known Brand in the Health and Fitness Industry having it’s chain of unique and premier health clubs in around the world. We promise a healthy and balanced life to you. In more than a Decade into its existence, GymHeros is one of the most respected names in Health and Fitness Industry and has acquired an enviable list of customers</p>
                    <Button className='text-white mt-4 mb-3' variant="info">Get Started</Button>{' '}
                </div>
            </div>
        </div>
    );
};

export default About;