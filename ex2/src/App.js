import React, { useEffect, useState } from 'react';
import CartItem from './components/cart';
import GroceryItem from './components/groceryItem';

import './App.css';

class Item {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

function App() {

  const groceryItems = [
    new Item("apple", .50),
    new Item("orange", .70),
    new Item("lime", 1.00)
  ];

  const [cartItems, updateCartItems] = useState([]);
  const [total, updateTotal] = useState(0.0);

  const addCartItem = (index) => {
    console.log("adding cart item");
    let currentCartItems = [...cartItems];
    currentCartItems.push(groceryItems[index]);
    console.log("updating cart items");
    updateCartItems(currentCartItems);
  }

  useEffect(() => {
    if (cartItems.length > 0) {
      const lastAdded = cartItems[cartItems.length - 1];
      let newTotal = total + lastAdded.price
      updateTotal(newTotal);
    }
  }, [cartItems])

  return (
    <div>
      <ul>
        {groceryItems.map((item, index) => <GroceryItem name={item.name} price={item.price} addItem={addCartItem} key={index} index={index} />)}
      </ul>
      <ul>
        {cartItems.map((item, index) => <CartItem name={item.name} key={index} />)}
      </ul>
      <p>{`Total: $${total.toFixed(2)}`}</p>
    </div>
  );
}

export default App;
