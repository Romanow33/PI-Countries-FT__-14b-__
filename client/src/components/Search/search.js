import {
  findCountries,
  getAllCountries,
  getByRegion,
  setCountriesAZ,
  setCountriesZA,
  setCountriesByInhabitansDESC,
  setCountriesByInhabitansASC,
  getByTourism,
} from "../../Actions/index";
import { connect } from "react-redux";
import React, { useState } from "react";
import "./search.css";

export function Busqueda(props) {
  const [countries, setCountries] = useState({
    inputName: "",
    inputRegion: "",
    inputTourism: "",
  });

  function handleSubmitName(e) {
    e.preventDefault();
    props.findCountry(countries.inputName);
    const div = document.getElementById("divPag");
    div.innerHTML = "";
    const divContainer = document.getElementById("paginationDiv");
    divContainer.style.display = "block";
  }

  function handleSubmitRegion(e) {
    e.preventDefault();
    props.getAllCountries();
    props.getByRegion(countries.inputRegion);
    let div = document.getElementById("divPag");
    div.innerHTML = "";
    let divContainer = document.getElementById("paginationDiv");
    divContainer.style.display = "block";
  }

  function handleCountriesAZ(e) {
    e.preventDefault();
    props.setCountriesAZ();
    
  }

  function handleCountriesZA(e) {
    e.preventDefault();
    props.setCountriesZA();
  }

  function handleCountriesInhabitansASC(e) {
    e.preventDefault();
    props.setCountriesByInhabitansASC();
  }

  function handleCountriesInhabitansDESC(e) {
    e.preventDefault();
    props.setCountriesByInhabitansDESC();
  }

  function handleByTourism(e) {
    e.preventDefault();
    props.getAllCountries();
    props.getByTourism(countries.inputTourism);
    let div = document.getElementById("divPag");
    div.innerHTML = "";
    let divContainer = document.getElementById("paginationDiv");
    divContainer.style.display = "block";
  }

  let handleName = (e) =>
    setCountries({ ...countries, inputName: e.target.value });
  let handleRegion = (e) =>
    setCountries({ ...countries, inputRegion: e.target.value });
  let handleTourism = (e) =>
    setCountries({ ...countries, inputTourism: e.target.value });

  return (
    <>
      <form className="form1">
        <div className="firstForm">
          <label>Por nombre </label>
          <div className="inputButtonConatiner">
            <input
              name="name"
              type="text"
              onChange={handleName}
              value={countries.inputName}
              placeholder="¿Qué país quieres ver?"
            />
            <button className="button" onClick={handleSubmitName}>
              GO
            </button>
          </div>
          <label>Por actividad</label>
          <div className="inputButtonConatiner">
            <input
              name="tourism"
              type="text"
              onChange={handleTourism}
              value={countries.inputTourism}
              placeholder="¿Qué actividad quieres hacer?"
            ></input>
            <button className="button" onClick={handleByTourism}>
              GO
            </button>
          </div>
          <label>Por continente </label>
          <div className="inputButtonConatiner">
            <select
              className="select"
              name="continent"
              onChange={handleRegion}
              value={countries.inputRegion}
            >
              <option value="">¿Qué continente quieres ver?</option>
              <option value="Europe">EUROPE</option>
              <option value="Americas">AMERICAS</option>
              <option value="Asia">ASIA</option>
              <option value="Africa">AFRICA</option>
              <option value="Oceania">OCEANIA</option>
              <option value="Polar">POLAR</option>
            </select>
            <button className="button" onClick={handleSubmitRegion}>
              GO
            </button>
          </div>
        </div>
        <div className="formHijo">
          <label>Organiza tu Busqueda:</label>
          <div className="buttonsForm">
            <button className="button2" onClick={handleCountriesAZ}>
              Ordenar A/Z
            </button>
            <button className="button2" onClick={handleCountriesZA}>
              Ordenar Z/A
            </button>
          </div>
          <div className="buttonsForm2">
            <button className="button2" onClick={handleCountriesInhabitansASC}>
              Población ASC
            </button>
            <button className="button2" onClick={handleCountriesInhabitansDESC}>
              Población DESC
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

function mapStateToProps(state) {
  return {
    search: state.countrySearched,
    allCountries: state.allCountries,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    findCountry: (name) => dispatch(findCountries(name)),
    getAllCountries: () => dispatch(getAllCountries()),
    getByRegion: (continent) => dispatch(getByRegion(continent)),
    setCountriesAZ: () => dispatch(setCountriesAZ()),
    setCountriesZA: () => dispatch(setCountriesZA()),
    setCountriesByInhabitansASC: () => dispatch(setCountriesByInhabitansASC()),
    setCountriesByInhabitansDESC: () =>
      dispatch(setCountriesByInhabitansDESC()),
    getByTourism: (Activity) => dispatch(getByTourism(Activity)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Busqueda);
