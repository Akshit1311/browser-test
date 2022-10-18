import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const userAgentString = navigator.userAgent;
  const ua = navigator.userAgent;

  // Detect Chrome
  var isChrome = ua.indexOf("Chrome") > -1 || ua.includes("CriOS");

  // Detect Safari
  const isSafari = /^((?!android).)*safari/i.test(ua) && !isChrome;

  // Detect Mobile
  const isMobile =
    /Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      ua
    );

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
        {/* userAgentString: {userAgentString} <br /> */}
        isChrome: {isChrome.toString()} <br />
        isSafari: {isSafari.toString()} <br />
        isMobile: {isMobile.toString()} <br />
        {/* {`userAgentString.includes("CriOS"): `} :{" "}
        {userAgentString.includes("CriOS").toString()} */}
      </h1>
    </div>
  );
}

export default App;
