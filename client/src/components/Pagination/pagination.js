import { React, useEffect, useState } from "react";
import "./pagination.css";
import { CountriesCard } from "../CountriesCard/countriesCard";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../Container/container";

function RenderData(countries) {
  return (
    <div className="falseBody">
      <div className="container" id="container">
        {countries ? (
          countries.map((country) => (
            <CountriesCard key={country.id + "s"} country={country} />
          ))
        ) : (
          <h2>Cargando...</h2>
        )}
      </div>
    </div>
  );
}

function Paginacion() {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  let countriesPerPage = 6;

  const [pageNumberLimit, setPageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(countries.length / countriesPerPage); i++) {
    pages.push(i);
  }

  let indexOfLastCountry = currentPage * countriesPerPage;
  let indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  let currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  function handleClick(e) {
    setCurrentPage(Number(e.target.id));
  }

  function handleNextBtn() {
    if (currentPage === 25) {
      setPageNumberLimit(maxPageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit);
    } else {
      setCurrentPage(currentPage + 1);
      if (currentPage + 1 > maxPageNumberLimit) {
        setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
      }
    }
  }

  function handlePrevBtn() {
    if (currentPage <= 1) {
      setPageNumberLimit(maxPageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit);
    } else {
      setCurrentPage(currentPage - 1);
      if ((currentPage - 1) % pageNumberLimit === 0) {
        setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
        setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
      }
    }
  }

  let renderPageNumber = pages.map((num) => {
    if (num < maxPageNumberLimit + 1 && num > minPageNumberLimit) {
      return (
        <li
          key={num}
          id={num}
          onClick={handleClick}
          className={currentPage === num ? "active" : null}
        >
          {num}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    fetch(`http://localhost:3001/countries/all`)
      .then((response) => response.json())
      .then((json) => setCountries(json));
  }, []);

  return (
    <>
      <div id="divPag">
        {RenderData(currentCountries)}
        <ul className="pageNumbers">
          {currentPage > 1 ? (
            <li>
              <button className="pagButton" onClick={handlePrevBtn}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </li>
          ) : null}
          {renderPageNumber}
          {currentPage < 25 ? (
            <li>
              <button className="pagButton" onClick={handleNextBtn}>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </li>
          ) : null}
        </ul>
      </div>
      <div id="paginationDiv" className="paginationDiv">
        <div className="container2">
          <Container />
        </div>
      </div>
    </>
  );
}

export default Paginacion;
