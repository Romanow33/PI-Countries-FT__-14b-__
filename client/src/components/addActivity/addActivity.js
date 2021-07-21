import {connect} from "react-redux";
import React, {useState, useEffect} from 'react';
import {getAllCountries } from "../../Actions/index";
import {post} from './post';
// import fetch from 'node-fetch';
import './addActivity.css';


function AddTourism(props){
    const [input, setInput]= useState({
        name:"",
        duration:"",
        season:"",
        dificulty:"",
        countryCode:[],
    })
    const [error, setError] = useState({});

    function handleTourism(e){
    e.preventDefault()
    props.getAllCountries() 
    }


    function stateReset(){
        setInput({
            name:"",
            duration:"",
            season:"",
            dificulty:"",
            countryCode:[],
            
            
        })
    }   

    useEffect(()=>{
        if(!input.name){
            setError({...error,name:"Necesitas Poner un Nombre a la actividad"})
        }
        else if(!input.duration){
            setError({...error, duration: "Escoge la cantidad de horas especificadas en la lista"})
        }
        else if(!input.season){
            setError({...error, season: "Escoge una temporada de la lista"})
        }
        else if(!input.dificulty){
            setError({...error, dificulty: "Escoge una dificultad de la lista"})
        }
        else if (input.countryCode===[]){
            setError({...error, countryCode: "Escoge al menos un país de la lista"})
        }
        else if(input.countryCode.length>0){
            setError({})
        }    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input])


    function submitForm(e){
        e.preventDefault()
        if(!error.name & !error.duration && !error.season && !error.dificulty && !error.countryCode){
        post(input)
        .then(()=>stateReset())
        .then(alert('Actividad Agregada'))   
        }
    else{
    alert('los campos deben ser completados')
    }  
    }

    
    function handleName(e){setInput({...input, name:e.target.value})}
    function handleDificultad(e){setInput({...input, dificulty:e.target.value})} 
    function handleTime(e){setInput({...input, duration:e.target.value})} 
    function handleSeason(e){setInput({...input, season:e.target.value})} 
    function handlePaises(e){;setInput({...input, countryCode:input.countryCode.concat(e.target.value)})} 

    function resetCodeCountry(e){
        e.preventDefault()
        setInput({...input, countryCode:[]})
    }

    return(
        <form onSubmit={submitForm} className='formAddTourism'>
            <h2>Agrega la Actividad que quieres hacer</h2> <hr></hr>
            <div>
            <label htmlFor='Nombre'> Nombre Actividad: </label>
            <input id='nombre' name = 'nombreActividad' type='text' required='required' onChange={handleName}
            value={input.name} placeholder='Escribe actividad' className={error.name && 'warning'}></input><br></br>
            {error.name && (<p className='warning'>{error.name}</p>)}
            </div>
            <div>
                <label htmlFor='Duración'>Duración Actividad: </label>
                <select id='duración' onChange={handleTime} value={input.duration} required='required'className={error.duration && 'warning'}>
                    <option defaultValue>selecciona la cantidad de horas</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                    <option value='5'>5</option>
                </select> <br></br>
                {error.duration && (<p className='warning'>{error.duration}</p>)}
        </div>
        <div>
            <label htmlFor='Temporada'>Temporada del Año de la Actividad: </label>
                <select id='temporada' onChange={handleSeason} value={input.season} className={error.season && 'warning'}>
                    <option  defaultValue>selecciona la cantidad de horas</option>
                    <option value='summer'>Summer</option>
                    <option value='autumn'>Autumn</option>
                    <option value='winter'>Winter</option>
                    <option value='spring'>Spring</option>
                </select> <br></br>
                {error.season && (<p className='warning'>{error.season}</p>)}
        </div>
            <div>
                <label htmlFor='Dificultad'>Dificultad Actividad: </label>
                <select id='dificultad' onChange={handleDificultad} value={input.dificulty} required='required' className={error.dificulty && 'warning'}>
                    <option defaultValue>selecciona la Dificultad</option>
                    <option value='Alta'>Alta</option>
                    <option value='Medio Alta'>Medio Alta</option>
                    <option value='Medio'>Medio</option>
                    <option value='Medio Baja'>Medio Baja</option>
                    <option value='Baja'>Baja</option>
                </select> <br></br>
                
            {error.dificulty && (<p className='warning'>{error.dificulty}</p>)}
            </div>
        <div>
            <label htmlFor='Paises'>Selecciona el Código de los Países a Agregar: </label><br></br>
            <button onClick={handleTourism}> trae Paises </button>
            <select id='selePais' onChange={handlePaises} value={input.countryCode} multiple={true} className={error.duration && 'warning'}>
                    
                {
                    props.allCountries && props.allCountries.map((el) => {
                        
                    return  <option key={el.id} value={el.countryCode}>{el.id}</option>
                    })
                }
            </select>
            <button onClick={resetCodeCountry}>Borrar Paises Seleccionados</button><br></br>
            {error.countryCode && (<p className='warning'>{error.countryCode}</p>)}
            </div>
            <div className='codigos'>{
                input.countryCode && input.countryCode.map(el=>
                    (<ul key={el}>{el}</ul>)
                )
                }
            </div>
            <button type='submit'className='submit'> Agregar Actividad</button>
        </form>
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
    getAllCountries: () => dispatch(getAllCountries())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTourism);