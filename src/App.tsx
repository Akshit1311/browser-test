import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const userAgentString = navigator.userAgent;

  // Detect Chrome

  var isChrome = userAgentString.indexOf("Chrome") > -1;

  // Detect Safari
  const ua = navigator.userAgent;
  const isSafari = /^((?!android).)*safari/i.test(navigator.userAgent);

  // Detect Firefox
  let firefoxAgent = userAgentString.indexOf("Firefox") > -1;

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        userAgentString: {userAgentString} <br />
        isChrome: {isChrome.toString()} <br />
        isSafari: {isSafari.toString()} <br />
        firefoxAgent: {firefoxAgent.toString()} <br />
      </h1>
    </div>
  );
}

export default App;
