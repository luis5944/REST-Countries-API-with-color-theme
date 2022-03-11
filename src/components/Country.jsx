import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getCountrySelected } from "../reducers/countriesReducer";

const Country = ({ country }) => {
  const dispatch = useDispatch();

  return (
    <div
      className="country"
      onClick={() => {
        dispatch(getCountrySelected(country.name));
      }}
    >
      <Link to={`/country/${country.alpha3Code}`}>
        <img src={country.flag} alt="" />
        <div className="information">
          <h3>{country.name}</h3>
          <p>
            <span>Population: </span>

            {new Intl.NumberFormat("es-ES").format(country.population)}
          </p>
          <p>
            <span>Region: </span>
            {country.region}
          </p>
          <p>
            <span>Capital: </span>
            {country.capital}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Country;
