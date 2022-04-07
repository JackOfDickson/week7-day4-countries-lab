import React from "react";

const CountryInfo = ({country, onFaveCountry}) => {

    const handleClick = (event) => {
        onFaveCountry(event.target.value);
    };

    return (
    <div>
        <h2>{country.name.common}</h2>
        <button onClick={handleClick} value={country.name.common}>Add to Favourites</button>

        <ul>
            <li><strong>Population</strong>: {country.population}</li>
            <li><strong>Capital City</strong>: {country.capital[0]}</li>
        </ul>
        <img src={country.flags.png}/>

        



    </div>

    );

};

export default CountryInfo;