import React from "react";
import BorderedCountries from "./BorderedCountries";

const CountryInfo = ({country, onFaveCountry, countries}) => {

    const handleClick = (event) => {
        onFaveCountry(event.target.value);
    };

    let borderCountries;
    let countryList;
    if (country.borders) {
        borderCountries = country.borders;
        countryList = borderCountries.map ( (neighbour) => {
            return (
                <li>{neighbour}</li>
            );
        });
    
    }


    return (
    <div>
        <h2>{country.name.common}</h2>
        <button onClick={handleClick} value={country.name.common}>Add to Favourites</button>

        <ul>
            <li><strong>Population</strong> - {country.population}</li>
            <li><strong>Capital City</strong> - {country.capital[0]}</li>
            {countryList ? <li><strong>Neighbouring Countries</strong> - <ul>{countryList}</ul></li> : null }
        </ul>
        <img src={country.flags.png}/>
        {/* <BorderedCountries country={country} countries={countries}/> */}

        



    </div>

    );

};

export default CountryInfo;