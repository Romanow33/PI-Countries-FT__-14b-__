import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.css";

export default function NavBar() {
  return (
    <>
      <div className="nav">
        <div className="nav-header">
          <div className="nav-title">Countries Proyect</div>
        </div>

        <div className="nav-links">
          <NavLink to="/countries">HOME</NavLink>
          <NavLink to="/activity">Agrega Una Actividad</NavLink>
          <a
            href="https://github.com/Romanow33"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ignacio-romanow-7b0467214/"
            target="_blank"
            rel="noreferrer"
          >
            linkedin
          </a>
        </div>
      </div>
    </>
  );
}
