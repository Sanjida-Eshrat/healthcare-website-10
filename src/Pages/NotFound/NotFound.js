import React from 'react';
import notFound from '../../images/notFound.jpg'

const NotFound = () => {
    return (
        <div className="container">
            {/* 404 image */}
            <img src={notFound} className="w-50 h-auto " alt="" />
            
        </div>
    );
};

export default NotFound;