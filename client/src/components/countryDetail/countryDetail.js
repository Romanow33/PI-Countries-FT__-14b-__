import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import {connect} from 'react-redux';
import { clearCountry, fetchCountry } from '../../Actions/index';
import {useParams} from 'react-router-dom';
import './countrydetail.css'

function CountryDetail(){
    const dispatch= useDispatch();
    const countryDetail= useSelector(state => state.countryDetail);
    const {id}= useParams();
    useEffect(()=>{
      dispatch(fetchCountry(id))
      return()=>{
        dispatch(clearCountry())
      }
    },[dispatch, id])

    return(
      <>
      {countryDetail? <h1 style={{ textTransform: 'uppercase'}}>{countryDetail.name}</h1>:<h1>No encontrado</h1>}

      {countryDetail=== {} && <h2>cargando...</h2>}
        {typeof countryDetail === 'object' && (<div className='details'>

            <img className='image' src={countryDetail.imageFlag} alt = "imagen"/> <br></br>
            <label className='title'>Código </label>
            <label >{countryDetail.id}</label> <br></br>
            <label className='title'>Capital </label>
            <label >{countryDetail.capital}</label><br></br>
            <label className='title'>Subregión </label>
            <label >{countryDetail.continent}</label><br></br>
            <label className='title'>Población  </label>
            <label>{countryDetail.population}</label><br></br>
            <label className='title'>Área  </label>
            <label>{countryDetail.area}</label><br></br><hr></hr>
            <label className='title'>Turismo  </label><hr></hr>
            <label>{countryDetail? (countryDetail.activities && countryDetail.activities.map(el=>(
              <div key={el.id} className='activityCard'>
                <label className='title' >Nombre Actividad: </label>
                <label className='n'>{el.name}</label><br></br>
                <label className='title'>Duración: </label>
                <label className='n'>{el.duration}</label><br></br>
                <label className='title'>Temporada: </label>
                <label className='n'>{el.season}</label><br></br>
                <label className='title'>Dificultad: </label>
                <label className='n'>{el.dificulty}</label>
            </div>))):<h1>No encontro país</h1>}
            </label><br></br>
            
          </div>)}
      </>  
    )
}

export default CountryDetail;