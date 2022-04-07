import React from "react";
import CountryListItem from "./CountryListItem";

const CountryList = ({countries}) => {

const countryItems = countries.map ( (country, index) => {

    return <CountryListItem country={country} key={index} />
})

return (

    <div>
        <table className="table">

        <tr>
            <td><strong>Country Name</strong></td>
            <td><strong>Country Population</strong></td>
        </tr>

            {countryItems}
        </table>
    </div>
)

};


export default CountryList;