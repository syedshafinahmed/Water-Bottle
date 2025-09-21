import React from 'react';
import './Bottle.css'

const Bottle = ({ bottle }) => {
    const { img } = bottle;
    return (
        <div className='card'>
            <img className='size' src={img} alt="" />
        </div>
    );
};

export default Bottle;