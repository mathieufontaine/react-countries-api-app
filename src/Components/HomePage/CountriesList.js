import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CountryCard from "./CountryCard";
import axios from "axios";

const Countries = () => {
  const [loading, setLoading] = useState(false);
  const [allCountries, setAllCountries] = useState([]);
  const [countries, setCountries] = useState([]);
  const [name, setName] = useState("");
  const [region, setRegion] = useState("all");
  const [sorting, setSorting] = useState("AZ");

  useEffect(() => {
    async function getData() {
      setLoading(true);
      try {
        const response = await axios.get("https://restcountries.com/v2/all");
        let i = 0;
        const countries = response.data.map(country => {
          i++;
          return { id: i, ...country };
        });
        console.log(countries);
        setAllCountries(countries);
        setCountries(countries);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getData();
  }, []);

  useEffect(() => {
    const filterCountriesByName = name => {
      const filteredCountries = allCountries.filter(country =>
        country.name.toLowerCase().startsWith(name.toLowerCase())
      );
      setCountries(filteredCountries);
    };
    filterCountriesByName(name);
  }, [name]);

  useEffect(() => {
    const filterCountriesByRegion = region => {
      if (region === "all") {
        setCountries(allCountries);
      } else {
        const filteredCountries = allCountries.filter(
          country => country.continent === region
        );
        setCountries(filteredCountries);
        setSorting("AZ");
      }
    };
    filterCountriesByRegion(region);
  }, [region, allCountries]);

  useEffect(() => {
    const sortCountries = sorting => {
      let sortedCountries = [...countries];
      if (sorting === "AZ") {
        sortedCountries = sortedCountries.sort((a, b) =>
          a.name > b.name ? 1 : -1
        );
      } else if (sorting === "ZA") {
        sortedCountries = sortedCountries.sort((a, b) =>
          a.name > b.name ? -1 : 1
        );
      } else if (sorting === "size-increase") {
        sortedCountries = sortedCountries.sort((a, b) =>
          a.population > b.population ? 1 : -1
        );
      } else if (sorting === "size-decrease") {
        sortedCountries = sortedCountries.sort((a, b) =>
          a.population > b.population ? -1 : 1
        );
      }
      setCountries(sortedCountries);
    };
    sortCountries(sorting);
  }, [sorting]);

  const clearFilters = () => {
    setName("");
    setRegion("all");
    setSorting("AZ");
    setCountries(allCountries);
  };

  return (
    <div className="container">
      <div className="filter-section">
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
            value={region}
          >
            <option value="all">Filter by Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          {/* <i class="select-form__icon fas fa-chevron-down"></i> */}
        </div>
        <div className="select-form">
          <select
            name="select"
            className="select-form__select"
            onChange={e => setSorting(e.target.value)}
            value={sorting}
          >
            <option value="AZ">Alphabetical AZ</option>
            <option value="ZA">Alphabetical ZA</option>
            <option value="size-decrease">Population Size (decreasing)</option>
            <option value="size-increase">Population Size (increasing)</option>
          </select>
          {/* <i class="select-form__icon fas fa-chevron-down"></i> */}
        </div>
        <button className="button button--clear" onClick={() => clearFilters()}>
          All Countries
        </button>
      </div>
      <div className="countries-wrapper">
        {loading === true ? (
          <p className="message">Loading Countries...</p>
        ) : countries.length !== 0 ? (
          countries.map(country => (
            <Link to={country.alpha3Code} key={country.id}>
              <CountryCard country={country} />
            </Link>
          ))
        ) : (
          <p className="message">No country found :/</p>
        )}
      </div>
    </div>
  );
};

export default Countries;
