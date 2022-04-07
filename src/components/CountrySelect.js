import React from "react";

const CountrySelect = ({countries, onCountrySelected}) => {

    const handleChange = function (event){
        const country = countries[event.target.value]
        onCountrySelected(country);
    }

    const countryOptions = countries.map ((country, index) => {
        return <option value={index} key={index}>{country.name.common}</option>
    });

    // const munrosOptions = munros.map ((munro, index) => {
    //     return <option value={index} key={index}>{munro.name}</option>
    // });

    return (
        <div>
            <p>Please select a country:</p>
            <select onChange={handleChange}>{countryOptions}</select>
        </div>

    );

};

export default CountrySelect;