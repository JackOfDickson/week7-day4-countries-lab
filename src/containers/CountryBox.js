import React, {useState, useEffect} from "react";
import CountrySelect from "../components/CountrySelect";
import CountryInfo from "../components/CountryInfo";

const CountryBox = () => {



    return (
        <>
        <CountrySelect />
        <CountryInfo />
        <p>This is the country box</p>
        </>
    );


};

export default CountryBox;