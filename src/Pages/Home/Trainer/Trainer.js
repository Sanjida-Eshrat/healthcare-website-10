import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';

const Trainer = (props) => {
    const {img,name,expertize} = props.trainer;
    return (
        <div>
            <Col>
                <Card style={{height:'380px'}} className="border-light shadow">
                    {/* to set the image in center */}
                    <div className="text-center">
                         <Image src={img} style={{height:'200px', width:'200px',margin:'20px'}} roundedCircle />
                    </div>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{expertize}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Trainer;