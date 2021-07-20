import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css'

export default function NavBar(){

    return(
      <>
      <div className="nav">
      <input type="checkbox" id="nav-check"/>
      <div className="nav-header">
        <div className="nav-title">
          Henry Countries
        </div>
      </div>
      <div className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
      
      <div className="nav-links">
      <NavLink  to='/countries'>HOME</NavLink>
      <NavLink  to='/activity'>Agrega Una Actividad</NavLink>
        <a href="https://github.com/Romanow33" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/ignacio-romanow-7b0467214/" target="_blank" rel="noreferrer">linkedin</a>
        
      </div>
    </div>
    </>
    )
}

