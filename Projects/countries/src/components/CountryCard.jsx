import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <img src={country.flags.png} alt={country.flags.alt} />

      <div className="country-card-details">
        <h3>{country.name.common}</h3>

        <p>{country.population}</p>
        <p>{country.region}</p>
      </div>
      {/* <p>{country.capital}</p> */}
    </div>
  );
};

export default CountryCard;
