import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="card">
      <img className="card__img" src={country.flag} alt="country flag" />
      <div className="card__infos">
        <h2 className="card__name">{country.name}</h2>
        <p className="card__text">
          <span className="card__text--label">Population : </span>
          {country.population.toLocaleString("en-US")}
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
  );
};

export default CountryCard;
