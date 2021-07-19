import  {React, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';

import { fetchCountries} from '../Actions/index';
import {Link} from 'react-router-dom';

function Mostrar() {
  const dispatch = useDispatch();
  const countries = useSelector(state => state.countries);

  useEffect(()=>{
    dispatch(fetchCountries())
  },[dispatch])


  return (
    
      <div>
        <ul>
          {
          Array.isArray(countries)? countries.map(country=>(
              <li key={country.id}>
                <Link to={`/countries/${country.id}`}>{country.name}</Link>
                <img src={country.bandera} alt={country.name}></img>
                <p>{country.continent}</p>
              </li>
          )): <h2>Cargando...</h2>
          }
        </ul>
      </div>
  );
}


export default Mostrar;