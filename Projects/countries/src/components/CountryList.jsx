import React, { useEffect, useState } from "react";
import { API } from "../utils/constants";
import CountryCard from "./CountryCard";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const filterCountries = async () => {
      try {
        const url = API.getCountryByName.replace("{countryName}", query);
        const data = await fetch(url);
        const result = await data.json();
        setCountries(result);
      } catch (err) {
        setCountries([]);
        console.log(err);
      }
    };

    const fetchCountries = async () => {
      try {
        const data = await fetch(API.getAllCountries);
        const result = await data.json();
        setCountries(result);
      } catch (err) {
        setCountries([]);
        console.log(err);
      }
    };

    if (query.trim() !== "") filterCountries();
    else fetchCountries();
  }, [query]);

  const handleFilter = (e) => {
    const filter = e.target.value;

    if (filter.trim() === "") return;

    fetchFilteredCountries(filter);
  };

  const fetchFilteredCountries = async (filter) => {
    const url = API.getCountryByRegion.replace("{regionName}", filter);
    const data = await fetch(url);
    const result = await data.json();
    setCountries(result);
  };

  return (
    <section>
      {/* section for search and filter  */}
      <div className="search-filter-comp">
        <div className="search-comp">
          <input
            type="text"
            placeholder="Search a country..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="filter-comp">
          <select name="filter" id="filter" onChange={(e) => handleFilter(e)}>
            <option value="">Filter by Region</option>
            <option value="asia">Asia</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="europe">Europe</option>
          </select>
        </div>
      </div>

      {/* section for countries list  */}
      <div className="counties-list-comp">
        {Array.isArray(countries) &&
          countries?.map((country, index) => {
            return <CountryCard key={index} country={country} />;
          })}
      </div>
    </section>
  );
};

export default CountryList;
