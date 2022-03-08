import React, { useRef, useEffect, useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const textRef = useRef();
  function quitText(ref) {
    ref.current.classList.toggle("refTextExit");
  }
  let history = useHistory();
  function historiPushing() {
    history.push("/countries");
  }
  let redirect;
  function handleClick(ref) {
    quitText(ref);
    redirect = setTimeout(historiPushing, 2500);
  }

  return (
    <div className="hero-header">
      <div className="header">
        <div className="title">
          <h1>Countries Proyect</h1>
        </div>
        <span className="info" ref={textRef}>
          the world in an app
        </span>
        <div id="parent">
          <button
            onClick={() => handleClick(textRef)}
            className="ov-btn-slide-top"
          >
            <FontAwesomeIcon icon={faArrowDown} />
          </button>
        </div>
      </div>
    </div>
  );
}
