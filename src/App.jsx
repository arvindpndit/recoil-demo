import { useState } from "react";

import "./App.css";

function App() {
  const [text, setText] = useState("abc");

  console.log(text);

  const characterCount = (text) => {
    const count = text.length;
    return count;
  };

  return (
    <>
      <h2>Recoil Demo</h2>
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <div>echo: {text} </div>
        <div>Character Count : {characterCount(text)}</div>
      </div>
    </>
  );
}

export default App;
