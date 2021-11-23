import React from 'react';
import { Card, Col , Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const Service = (props) => {
    const {id,title,price,description,img} = props.service;
    return (
        <div>
            <Col>
                <Card style={{height:'500px'}} className="border-light shadow">
                    <Card.Img variant="top" src={img} style={{height:'250px'}} className="img-fluid img-style"/>
                    <Card.Body>
                        <Card.Title>{title.slice(0,25)}</Card.Title>
                        <Card.Text>{description.slice(0,80)}</Card.Text>
                        {/* <Card.Text>Price: $ {price}</Card.Text> */}
                        <Link to={`/details/${id}`}>
                            {/* <Button variant="dark">Book {title.toLowerCase()}</Button> */}
                            <Button variant="dark">Details</Button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;