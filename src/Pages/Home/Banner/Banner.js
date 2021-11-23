import React from 'react';
import { Button, Container } from 'react-bootstrap';
// import background from '../../../images/banner-bg.jpg';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <div className="bg-light m-0 text-white container-fluid banner-style">
            <Container fluid>
                <div className="text-start container top-banner" style={{paddingTop:'195px',paddingBlockEnd:'180px'}}>
                <h1 className="pt-4 text-2 text-anim">Welcome to <span style={{color:'orange'}}>Gym</span><span style={{color:'#7aecdb'}}>Heros</span></h1>
                <Button className='text-white mt-4' variant="outline-info">Get Started</Button>{' '}
                </div>
            </Container>
        </div>
        </div>
    );
};

export default Banner;