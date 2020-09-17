import React, { useState } from 'react';

const Number = () => {
    const [number, setNumber] = useState(0);

    return (
        <div>
            <p>{number}</p>
            <button onClick={() => setNumber(prevNumber => prevNumber + 1)}>Increment by 1</button> 
            <button onClick={() => setNumber(prevNumber => prevNumber - 1)}>Decrement by 1</button>
        </div>
    
    )
}

export default Number;