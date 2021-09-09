import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Country = () => {
  const [country, setCountry] = useState("");
  let { name } = useParams();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await axios.get(
        `https://restcountries.eu/rest/v2/name/${name}`
      );
      setCountry(response.data[0]);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      <p>{country.name}</p>
      <button>
        <Link to="/">Home</Link>
      </button>
    </div>
  );
};

export default Country;
