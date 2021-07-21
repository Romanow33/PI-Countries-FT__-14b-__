import { findCountries, getAllCountries, getByRegion, setCountriesAZ, setCountriesZA, setCountriesByInhabitansDESC, setCountriesByInhabitansASC, getByTourism } from "../../Actions/index";
import {connect} from "react-redux";
import React, {useState} from 'react';
import "./search.css"



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
    let div = document.getElementById("divPag")
    div.innerHTML = "" 
    let divContainer = document.getElementById("paginationDiv")
    divContainer.style.display = "block"
    
  } 

  let handleName = (e)=> setCountries({...countries, inputName:e.target.value})
  let handleRegion = (e)=> setCountries({...countries, inputRegion:e.target.value})
  let handleTourism = (e)=> setCountries({...countries, inputTourism:e.target.value})


  return(
    <>
    
    <form className='form1'><h1>Busca el país</h1><br></br>
    <div className="firstForm">
        <label>Por Nombre </label>       
        <input name='name' type='text' onChange={handleName} value={countries.inputName} placeholder='¿Qué país quieres ver?'/>
        <button className="button" onClick={handleSubmitName}>go</button>

        <label>Por Continente </label>
      <select className= "select" name='continent' onChange={handleRegion} 
      value={countries.inputRegion}>
                    <option value="">¿Qué continente quieres ver?</option>
                    <option value="Europe">EUROPE</option>
                    <option value="Americas">AMERICAS</option>
                    <option value="Asia">ASIA</option>
                    <option value="Africa">AFRICA</option>
                    <option value="Oceania">OCEANIA</option>
                    <option value="Polar">POLAR</option>
                </select>
        <button className="button" onClick={handleSubmitRegion}>go</button>

        <label>Por Tourismo</label>
        <input name='tourism' type='text' onChange={handleTourism}
        value={countries.inputTourism} placeholder='¿Qué actividad quieres hacer?'></input>
        <button className="button" onClick={handleByTourism}> go </button><br/>
        </div>
        <div className= 'formHijo'>Organiza tu Busqueda<br></br>
          <button className="button2" onClick={handleCountriesAZ}>Ordenar A/Z</button>
          <button className="button2" onClick={handleCountriesZA}>Ordenar Z/A</button>
          <button className="button2" onClick={handleCountriesInhabitansASC}>Población ASC</button> 
          <button className="button2" onClick={handleCountriesInhabitansDESC}>Población DESC</button> 
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
      getByTourism: Activity => dispatch(getByTourism(Activity))

    };
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Busqueda);