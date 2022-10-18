import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const userAgentString = navigator.userAgent;

  // Detect Chrome

  var isChrome = userAgentString.indexOf("Chrome") > -1;

  // Detect Safari
  let safariAgent =
    /constructor/i.test(window.HTMLElement.toString()) ||
    (function (p) {
      return p.toString() === "[object SafariRemoteNotification]";
    })(
      // @ts-ignore
      !window["safari"] || // @ts-ignore
        (typeof safari !== "undefined" && window["safari"].pushNotification)
    );

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
        isChrome: {isChrome.toString()} <br />
        safariAgent: {safariAgent.toString()} <br />
        firefoxAgent: {firefoxAgent.toString()} <br />
      </h1>
    </div>
  );
}

export default App;
