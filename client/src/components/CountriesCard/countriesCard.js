import { Link } from "react-router-dom";
import "./countriesCard.css";

export function CountriesCard(countrie) {
  const countryData = countrie.country;
  console.log(countryData);
  return (
    <div className="card">
      <h1 className="card-title">
        <div>{countryData.name}</div>
      </h1>
      <img src={countryData.imageFlag} alt={countryData.name} />
      <div className="card-desc">
        <h1>
          <Link to={`/countries/${countryData.id}`} className="link">
            {countryData.name}
          </Link>
        </h1>
        <h2>
          Continente: <label>{countryData.continent}</label>
        </h2>

        <h2>
          Poblacion: <label>{countryData.population}</label>
        </h2>
        {countryData?.activities.length === 0 ? null : (
          <>
            <h2>Actividades:</h2>
            <div className="chipContainer">
              {countryData?.activities.map((a) => (
                <p className="activitiesPill">{a.name}</p>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
