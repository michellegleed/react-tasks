import React from "react";

function App() {

  // const message = "JavaScript is so cool!";

  const [message, setMessage] = React.useState("Javascript is so cool!");

  function handleClick() {
    setMessage("My new message");
  }

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={handleClick}>Update the message!</button>
    </div>);
}

export default App; 