import React, { use } from 'react';

const Bottles = ({ bottlesPromise }) => {
    const bottles = use(bottlesPromise);
    console.log(bottles);
    return (
        <div>
            <div>
                {bottles.map(bottle => (
                    <div key={bottle.id}>
                        <h3>{bottle.name}</h3>
                        <p>Price: ${bottle.price}</p>
                        <p>Color: {bottle.color}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bottles;