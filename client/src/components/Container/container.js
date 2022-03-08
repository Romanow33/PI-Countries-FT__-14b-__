import React from "react";
import { connect } from "react-redux";
import { findCountries } from "../../Actions/index";
import { Link } from "react-router-dom";
import "./container.css";

function Container(props) {
  return (
    <div className="container">
      {props.search &&
        props.search.map((el) => (
          <div className="card">
          <h1 className="card-title">
            <div>{el.name}</div>
          </h1>
          <img src={el.imageFlag} alt={el.name} />
          <div className="card-desc">
            <h1>
              <Link to={`/countries/${el.id}`} className="link">
                {el.name}
              </Link>
            </h1>
            <h2>Continente:</h2>
            <label>{el.continent}</label>
            <h2>Poblacion:</h2>
            <label>{el.population}</label>
          </div>
        </div>
        ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    search: state.countrySearched,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    findCountry: (name) => dispatch(findCountries(name)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);
