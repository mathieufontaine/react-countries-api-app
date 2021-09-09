import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import CountryCard from "./CountryCard";

const Countries = () => {
  const [country, setCountries] = useState({
    id: 1,
    name: "Germany",
    population: 80000000,
    capital: "Berlin"
  });

  return (
    <div className="container">
      <div className="flex">
        <div className="search-form">
          <div className="search-form__icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <input
            type="text"
            className="search-form__input"
            placeholder="Search for a country.."
          />
        </div>
        <div className="select-form">
          <select name="select" class="select-form__select">
            <option value="Option 1">Africa</option>
            <option value="Option 2">America</option>
            <option value="Option 3">Asia</option>
            <option value="Option 4">Europe</option>
            <option value="Option 5">Oceania</option>
          </select>
        </div>
      </div>
      <div className="countries-wrapper">
        {/* {countries.forEach(country => (
          <CountryCard country={country} key={country.id} />
        ))}
        <p>coucou</p> */}
        <div className="card">
          <img className="card__img" alt="country flag" />
          <div className="card__infos">
            <h2 className="card__name">{country.name}</h2>
            <p className="card__text">
              <span className="card__text--label">Population : </span>
              {country.population}
            </p>
            <p className="card__text">
              <span className="card__text--label">Region : </span>
              {country.region}
            </p>
            <p className="card__text">
              <span className="card__text--label">Capital : </span>
              {country.capital}
            </p>
          </div>
        </div>
      </div>

      {/* <button><Link to="/country">Country</Link></button> */}
    </div>
  );
};

export default Countries;
