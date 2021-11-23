import React from 'react';
import { Row } from 'react-bootstrap';
import trainer1 from '../../../images/trainers/img-1.jpg';
import trainer2 from '../../../images/trainers/img-2.jpg';
import trainer3 from '../../../images/trainers/img-3.jpg';
import trainer4 from '../../../images/trainers/img-4.jpg';
import Trainer from '../Trainer/Trainer';
const trainers= [
    {
        img: trainer1,
        name: 'Emma Anderson',
        expertize:'Personal Trainer',
    },
    {
        img: trainer2,
        name: 'Olivia Jones',
        expertize:'Yoga Expert',
    },
    {
        img: trainer3,
        name: 'Zakaria Ali',
        expertize:'Cardio Workout Expert',
    },
    {
        img: trainer4,
        name: 'Chris Martin',
        expertize:'Nutritionist',
    }
];

const Trainers = () => {
    return (
        <div className="container-fluid mt-5 mb-3" id="experts">
            <h3 className="text-center py-4">Our <span style={{color:'orange'}}>Trainers</span></h3>
            <Row xs={1} md={4} className="g-3 mt-3">
                {
                   trainers.map(trainer => <Trainer trainer={trainer}></Trainer>)
                }
            </Row>
        </div>
    );
};

export default Trainers;