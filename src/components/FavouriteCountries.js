import React from "react";

const FavouriteCountries = ({faveCountries}) => {

    const countryList = faveCountries.map((country, index) => {
        return <li>{country}</li>
        
    })

    return (
    <div>
        <h3>Favourite Countries:</h3>
        <ul>
            {countryList}
        </ul>
    </div>
    )
}

export default FavouriteCountries