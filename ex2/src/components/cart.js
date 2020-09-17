import React from 'react';

const CartItem = (props) => {

    return (
        <li key={props.index}>{props.name}</li>
    )
}

export default CartItem;