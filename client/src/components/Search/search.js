import { findCountries, getAllCountries, getByRegion, setCountriesAZ, setCountriesZA, setCountriesByInhabitansDESC, setCountriesByInhabitansASC, getByTourism } from "../../Actions/index";
import {connect} from "react-redux";
import React, {useState} from 'react';

import "./search.css"
import { Link } from 'react-router-dom';


export function Busqueda(props){
  const[countries, setCountries] = useState({
        inputName:"",
        inputRegion:"",
        inputTourism:""
    })

  function handleSubmitName(e){
    e.preventDefault()
    props.findCountry(countries.inputName)
    let div = document.getElementById("divPag")
    div.innerHTML = "" 
    let divContainer = document.getElementById("paginationDiv")
    divContainer.style.display = "block"
    
  }  

  function handleSubmitRegion(e){
    e.preventDefault()
    props.getAllCountries()
    props.getByRegion(countries.inputRegion)
    let div = document.getElementById("divPag")
    div.innerHTML = "" 
    let divContainer = document.getElementById("paginationDiv")
    divContainer.style.display = "block"
  } 
  
  function handleCountriesAZ(e){
    e.preventDefault()
    props.setCountriesAZ()
  }

  function handleCountriesZA(e){
    e.preventDefault()
    props.setCountriesZA()
  }

  function handleCountriesInhabitansASC(e){
    e.preventDefault()
    props.setCountriesByInhabitansASC()
  }

  function handleCountriesInhabitansDESC(e){
    e.preventDefault()
    props.setCountriesByInhabitansDESC()
  }

  function handleByTourism(e){
    e.preventDefault()
    props.getAllCountries()
    props.getByTourism(countries.inputTourism)

  } 

  let handleName = (e)=> setCountries({...countries, inputName:e.target.value})
  let handleRegion = (e)=> setCountries({...countries, inputRegion:e.target.value})
  let handleTourism = (e)=> setCountries({...countries, inputTourism:e.target.value})


  return(
    <>
    <form className='form'><h1>Busca el País</h1><br></br>

        <label>Por Nombre </label>       
        <input name='name' type='text' onChange={handleName} value={countries.inputName} placeholder='¿Qué país quieres ver?'/>
        <button  onClick={handleSubmitName}>go</button><br/>

        <label>Por Continente </label>
        <input name='continent' type='text' onChange={handleRegion}
        value={countries.inputRegion} placeholder='¿Qué continente quieres ver?'></input> 
        <button onClick={handleSubmitRegion}>go</button><br/>

        <label>Por Tourismo</label>
        <input name='tourism' type='text' onChange={handleTourism}
        value={countries.inputTourism} placeholder='¿Qué actividad quieres hacer?'></input>
        <button onClick={handleByTourism}>go</button><br/>

        <button><Link to={`/countries`} style={{ textDecoration: 'none', color:'#ffffa4'}}>Quitar filtros</Link></button>
        
        <div className= 'formHijo'>Organiza tu Busqueda<br></br>
          <button onClick={handleCountriesAZ}>Ordenar A/Z</button>
          <button onClick={handleCountriesZA}>Ordenar Z/A</button>
          <button onClick={handleCountriesInhabitansASC}>Población ASC</button> 
          <button onClick={handleCountriesInhabitansDESC}>Población DESC</button> 
        </div> 
        
    </form>  
    
    </>
  )

}




function mapStateToProps(state) {
    return {
      search: state.countrySearched,
      allCountries: state.allCountries
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      findCountry: name => dispatch(findCountries(name)),
      getAllCountries: () => dispatch(getAllCountries()),
      getByRegion: continent => dispatch(getByRegion(continent)),
      setCountriesAZ: () => dispatch(setCountriesAZ()),
      setCountriesZA: () => dispatch(setCountriesZA()),
      setCountriesByInhabitansASC: () => dispatch(setCountriesByInhabitansASC()),
      setCountriesByInhabitansDESC: () => dispatch(setCountriesByInhabitansDESC()),
      getByTourism: tourism => dispatch(getByTourism(tourism))

    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Busqueda);