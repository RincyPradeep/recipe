import React from "react";
import "./Loader.scss";

function Loader() {
  return (
    <div className="loader">
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100">
    <circle cx="30" cy="50" fill="#fff">
      <animate attributeName="r" values="0;5;0" dur="1.2s" repeatCount="indefinite"/>
    </circle>
    <circle cx="50" cy="50" fill="#fff">
      <animate attributeName="r" values="0;5;0" dur="1.2s" begin="0.4s" repeatCount="indefinite"/>
    </circle>
    <circle cx="70" cy="50" fill="#fff">
      <animate attributeName="r" values="0;5;0" dur="1.2s" begin="0.8s" repeatCount="indefinite"/>
    </circle>
  </svg> */}
    <svg xmlns="http://www.w3.org/2000/svg" width="100px" height="100px" viewBox="0 0 100 100">
    <path d="M 50,50 L 33,60.5 a 20 20 -210 1 1 34,0 z" fill="#fff">
      <animateTransform attributeName="transform" type="rotate" from="0 50 50" to="360 50 50" dur="1.2s" repeatCount="indefinite"/>
    </path>
      <circle cx="50" cy="50" r="16" fill="#424242"></circle>
    </svg>
      <h3>Loading...</h3>
    </div>
  );
}

export default Loader;
