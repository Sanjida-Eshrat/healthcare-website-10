import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Service from '../Service/Service';

// const history = useHistory();
const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div className="mt-5 pb-4 container-fluid"  id="services">
            <h3 className="text-center py-4">Our <span style={{color:'#0dd6b8'}}>Services</span></h3>
            <Row xs={1} md={4} className="g-3 mt-3">
                {
                   services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;