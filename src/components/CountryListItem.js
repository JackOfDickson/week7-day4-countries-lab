import React from "react";

const CountryListItem = ( {country}) => {

    return (
    <tr>
        <td>{country.name.common}</td>
        <td>{country.population}</td>
    </tr>
    )
};

export default CountryListItem;