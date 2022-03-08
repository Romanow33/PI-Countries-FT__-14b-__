import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {connect} from 'react-redux';
import { clearCountry, fetchCountry } from "../../Actions/index";
import { useParams } from "react-router-dom";
import "./countrydetail.css";
import { Link } from "react-router-dom";

function CountryDetail() {
  const dispatch = useDispatch();
  const countryDetail = useSelector((state) => state.countryDetail);
  const { id } = useParams();
  useEffect(() => {
    dispatch(fetchCountry(id));
    return () => {
      dispatch(clearCountry());
    };
  }, [dispatch, id]);
  console.log(countryDetail);
  return (
    <>
      {countryDetail ? (
        <h1 className="deTitle">{countryDetail.name}</h1>
      ) : (
        <h1>No encontrado</h1>
      )}

      {countryDetail === {} ? (
        <h2>cargando...</h2>
      ) : (
        typeof countryDetail === "object" && (
          <div className="details">
            <div className="imgContainer">
              <img
                className="image"
                src={countryDetail.imageFlag}
                alt="imagen"
              />
            </div>
            <div className="infoContainer">
              <h1>
                Código: <label>{countryDetail.id}</label>
              </h1>

              <h1>
                Capital: <label>{countryDetail.capital}</label>
              </h1>

              <h1>
                Continente: <label>{countryDetail.continent}</label>
              </h1>

              <h1>
                Población: <label>{countryDetail.population}</label>
              </h1>

              <h1>
                Área total: <label>{countryDetail.area}</label>
              </h1>
            </div>
          </div>
        )
      )}
      {countryDetail?.activities?.length === 0 ? (
        <h1 className="notAactivity">
          Aun no hay actividades &#128532;,{" "}
          <Link className="notAactivityLink" to="/activity">
            agrega una!
          </Link>
        </h1>
      ) : (
        <div className="tableContainer">
          <table summary="Los grupos de música punk más famosos del Reino Unido">
            <caption>Actividades</caption>
            <thead>
              <tr>
                <th scope="col">Actividad</th>
                <th scope="col">Duración</th>
                <th scope="col">Temporada</th>
                <th scope="col">Dificultad</th>
              </tr>
            </thead>
            <tbody>
              {countryDetail?.activities?.map((el) => (
                <tr>
                  <th scope="row">{el.name}</th>
                  <td>{el.duration}</td>
                  <td>{el.season}</td>
                  <td>{el.dificulty}</td>
                </tr>
              ))}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
      )}
    </>
  );
}

/* <div className="details">
<img className="image" src={countryDetail.imageFlag} alt="imagen" />

<label className="title">Código </label>
<label>{countryDetail.id}</label>
<label className="title">Capital </label>
<label>{countryDetail.capital}</label>

<label className="title">Subregión </label>
<label>{countryDetail.continent}</label>

<label className="title">Población </label>
<label>{countryDetail.population}</label>

<label className="title">Área </label>
<label>{countryDetail.area}</label>

<hr></hr>
<label className="title">Turismo </label>
<hr></hr>
<label>
  {countryDetail ? (
    countryDetail.activities &&
    countryDetail.activities.map((el) => (
      <div key={el.id} className="activityCard">
        <li className="title">Nombre Actividad: </li>
        <li className="n">{el.name}</li>

        <li className="title">Duración: </li>
        <li className="n">{el.duration}</li>

        <li className="title">Temporada: </li>
        <li className="n">{el.season}</li>

        <li className="title">Dificultad: </li>
        <li className="n">{el.dificulty}</li>
      </div>
    ))
  ) : (
    <h1>No encontro país</h1>
  )}
</label>
</div> */
export default CountryDetail;
