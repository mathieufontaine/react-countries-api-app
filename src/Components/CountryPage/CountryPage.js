import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const CountryPage = () => {
  const [country, setCountry] = useState({});
  const [loading, setLoading] = useState(true);

  let { code } = useParams();

  useEffect(() => {
    setLoading(true);
    getData();
    setLoading(false);
  }, [country]);

  async function getData() {
    try {
      const response = await axios.get(
        `https://restcountries.com/v2/alpha/${code}`
      );
      const infos = response.data;
      infos.currencies = getString(infos.currencies);
      infos.languages = getString(infos.languages);
      setCountry(infos);
    } catch (error) {
      console.log(error);
    }
  }

  function getString(array) {
    let str = "";
    if (array.length === 1) {
      str = array[0].name;
    } else if (array.length > 1) {
      str = array[0].name;
      for (let i = 1; i < array.length; i++) {
        str += `, ${array[i].name}`;
      }
    }
    return str;
  }

  return (
    <div className="container">
      <Link to="/">
        <button className="button button--back">
          <i className="fas fa-arrow-left"></i> Back
        </button>
      </Link>

      {loading === true ? (
        <p className="message">Loading Country Data...</p>
      ) : country.flags !== undefined ? (
        <div className="country-page">
          <img
            src={country.flags[1]}
            alt={`${country}'s flag`}
            className="country-page__img"
          />
          <div className="details-box">
            <h1>{country.name}</h1>
            <div className="details-box__infos">
              <div className="details-box__grid">
                <div>
                  <p className="details-box__text">
                    <span className="details-box__text--label">
                      Native Name :{" "}
                    </span>
                    {country.nativeName}
                  </p>
                  <p className="details-box__text">
                    <span className="details-box__text--label">
                      Population :{" "}
                    </span>
                    {country.population &&
                      country.population.toLocaleString("en-US")}
                  </p>
                  <p className="details-box__text">
                    <span className="details-box__text--label">Region : </span>
                    {country.region}
                  </p>
                  <p className="details-box__text">
                    <span className="details-box__text--label">
                      Sub Region :{" "}
                    </span>
                    {country.subregion}
                  </p>
                  <p className="details-box__text">
                    <span className="details-box__text--label">Capital : </span>
                    {country.capital}
                  </p>
                </div>
                <div>
                  <p className="details-box__text">
                    <span className="details-box__text--label">
                      Top Level Domain :{" "}
                    </span>
                    {country.topLevelDomain}
                  </p>
                  <p className="details-box__text">
                    <span className="details-box__text--label">
                      Currency :{" "}
                    </span>
                    {country.currencies}
                  </p>
                  <p className="details-box__text">
                    <span className="details-box__text--label">
                      Languages :{" "}
                    </span>
                    {country.languages}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <p className="details-box__text">
                <span className="details-box__text--label">
                  Borders Countries:{" "}
                </span>
              </p>
              <div className="details-box__items">
                {country.borders &&
                  country.borders.map(border => (
                    <Link to={border} key={country.id}>
                      <button className="button">{border}</button>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="message">No country found :/</p>
      )}
    </div>
  );
};
export default CountryPage;
