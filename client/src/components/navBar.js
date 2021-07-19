import React from 'react';
import { NavLink } from 'react-router-dom';
import './navBar.css'

export default function NavBar(onSearch){

    return(
        <header className='navbar'>
          <nav className='list'>
            <li className='list-item'>
              <NavLink  to='/countries'>HOME</NavLink>
              <NavLink  to='/activity'>Agrega Una Actividad</NavLink>
              {/* <NavLink  to='/busqueda'>Haz una Busqueda</NavLink> */}
            </li>
            
          </nav>
          
        </header>
    )
}

