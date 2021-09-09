import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CountryCard from "./CountryCard";
import axios from "axios";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get("https://restcountries.eu/rest/v2/all");
      setCountries(response.data);
    } catch (error) {
      console.error(error);
    }
  }

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
          <select name="select" className="select-form__select">
            <option value="Option 1">Africa</option>
            <option value="Option 2">America</option>
            <option value="Option 3">Asia</option>
            <option value="Option 4">Europe</option>
            <option value="Option 5">Oceania</option>
          </select>
        </div>
      </div>
      <div className="countries-wrapper">
        {countries.map(country => (
          <Link to={country.name}>
            <CountryCard country={country} key={country.name} />
          </Link>
        ))}
      </div>

      {/* <button><Link to="/country">Country</Link></button> */}
    </div>
  );
};

export default Countries;
