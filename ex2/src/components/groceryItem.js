import React from 'react';

const GroceryItem = (props) => {    

    return (
    <li><button onClick={() => {props.addItem(props.index)}}>{`${props.name} - $${props.price}`}</button></li>
    )
}

export default GroceryItem;