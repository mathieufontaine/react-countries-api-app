import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CountryCard from "./CountryCard";
import axios from "axios";

const Countries = () => {
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");
  const [region, setRegion] = useState("");

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    filterCountriesByName(name);
  }, [name]);

  useEffect(() => {
    filterCountriesByRegion(region);
  }, [region]);

  async function getData() {
    try {
      const response = await axios.get("https://restcountries.eu/rest/v2/all");
      let i = 0;
      const countries = response.data.map(country => {
        i++;
        return { id: i, ...country };
      });
      setAllCountries(countries);
      setCountries(countries);
    } catch (error) {
      console.error(error);
    }
  }

  const filterCountriesByName = name => {
    const filteredCountries = allCountries.filter(country =>
      country.name.toLowerCase().startsWith(name.toLowerCase())
    );
    setCountries(filteredCountries);
  };

  const filterCountriesByRegion = region => {
    if (region === "All") {
      setCountries(allCountries);
    } else {
      const filteredCountries = allCountries.filter(
        country => country.region === region
      );
      setCountries(filteredCountries);
    }
  };

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
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="select-form">
          <select
            name="select"
            className="select-form__select"
            onChange={e => setRegion(e.target.value)}
          >
            <option value="All">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <i class="select-form__icon fas fa-chevron-down"></i>
        </div>
      </div>
      <div className="countries-wrapper">
        {countries.map(country => (
          <Link to={country.name}>
            <CountryCard country={country} key={country.id} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Countries;
