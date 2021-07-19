import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css'



export default function Header(){
    const [ /* checked */ , setChecked]= useState(false);
    useEffect(()=>{
        setChecked(true);
    },[])

    return(
        <div className='root'>
        <div className="appbar" elevation={0}>
            
        </div>
        <div className="contenedor">
            <h1 className="tittle">Bienvenidos a </h1><br/><h1 className="tittle2">Country Henry App</h1> 
            <Link to='/countries'>
                
                <div className="center-con">
                <button className="round">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                </button>
                </div> 
            </Link>   
            
        </div>
        
        </div>
    )

}