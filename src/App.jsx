import { useRecoilState, useRecoilValue } from "recoil";

import textState from "./recoil/atom/textAtom";
import characterCountState from "./recoil/selector/textCounterSelector";
import "./App.css";

function App() {
  const [text, setText] = useRecoilState(textState);
  const count = useRecoilValue(characterCountState);

  console.log(text);

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
        <div>Character Count : {count}</div>
      </div>
    </>
  );
}

export default App;
