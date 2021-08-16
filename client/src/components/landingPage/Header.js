import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'



export default function Header(){
    const [ /* checked */ , setChecked]= useState(false);
    useEffect(()=>{
        setChecked(true);
    },[])

    return(
        <div className="hero-header">
        <div className="header">
        <h1>Countries Proyect!</h1>
        <div className="btn btn-2"> <Link to='/countries'><span>Entrar</span></Link></div>
        </div>
        <div className="body"></div>
    </div>
        
    )

}

