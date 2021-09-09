import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="card">
      <img className="card__img" alt="country flag" />
      <div className="card__infos">
        <h2 className="card__name">{country.name}</h2>
        <p className="card__population">Population : {country.population}</p>
        <p className="card__region">Region : {country.region}</p>
        <p className="card__capital">Capital : {country.capital}</p>
      </div>
    </div>
  );
};

export default CountryCard;
