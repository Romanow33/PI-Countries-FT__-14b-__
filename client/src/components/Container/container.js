import React from 'react';
import {connect} from "react-redux";
import {findCountries} from '../../Actions/index';
import { Link } from 'react-router-dom';


function Container(props){
    return(
    <div className='container'>
        { props.search && props.search.map( (el)=>(
          
            <div key={el.id + 's'} className='countryCards'>
                <img className="imgFlag"  src={el.imageFlag} alt={el.name}></img>
<Link className='title' to={`/countries/${el.id}`} style={{ textDecoration: 'none', color:'#ffffa4'}}>{el.name}</Link>
                <label className='title2'>continente</label><hr></hr>
                <p className="title3">{el.continent}</p>
                <label className='title2'>Poblacion </label><hr></hr>
                <p className="title3">{el.population}</p>
              
            </div>

        ))}
    </div>
  )
}


function mapStateToProps(state) {
    return {
      search: state.countrySearched,
  
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      findCountry: name => dispatch(findCountries(name)),
    
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(Container);