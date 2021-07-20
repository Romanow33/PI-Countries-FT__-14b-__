import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'



export default function Header(){
    const [ /* checked */ , setChecked]= useState(false);
    useEffect(()=>{
        setChecked(true);
    },[])

    return(
        <div class="hero-header">
        <div class="header">
        <h1>Hola Henry!</h1>
        <h2>Henry Country!</h2>
        <div class="btn btn-2"> <Link to='/countries'><span>Entrar</span></Link></div>
        </div>
        <div class="body"></div>
    </div>
        
    )

}

