import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../hooks/useServices';

const Details = () => {
    const {id} = useParams();
    const [details, setDetails] = useState([]);
    
    useEffect(()=>{
        fetch('/services.json')
        .then(res=>res.json())
        .then(data=> setDetails(data))
    },[])
    // for single service show
    const singleItem = details.filter(detail => detail.id == id);
    console.log(singleItem);
    return (
        // <div className="container">
        //     <div>
        //         <img src={singleItem[0]?.img} alt="" />
        //     </div>
        //     <div>
        //         <h2>{singleItem[0]?.title}</h2>
        //         <p>{singleItem[0]?.description}</p>
        //     </div>
            
        // </div>
        <div className="container-fluid my-5 p-5 w-75" id="about">
        <div className="row d-flex">

           <div className="col-lg-6 col-md-12 mt-5 text-start">
                <h2><span style={{color:'orange'}}>{singleItem[0]?.title}</span></h2>
                <p>{singleItem[0]?.description}</p>
                <h5>Monthly Fee: ${singleItem[0]?.price}</h5>
            </div>
            <div className="col-lg-6 col-md-12">
                <img src={singleItem[0]?.img} alt="" className="img-fluid"/>
            </div>
   
        </div>
    </div>
    );
};

export default Details;