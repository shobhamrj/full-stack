import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  return (
    <div className="container">
      <h1> {time} </h1>
      <button onClick={getCurrentTime}> Get Time </button>
    </div>
  );
}

export default App;
