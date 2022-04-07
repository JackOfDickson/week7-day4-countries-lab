import React, {useState, useEffect} from "react";
import CountrySelect from "../components/CountrySelect";
import CountryInfo from "../components/CountryInfo";
import CountryList from "../components/CountryList";

const CountryBox = () => {

    const [countries, setCountries] = useState([]);
    const [totalPop, setTotalPop] = useState(0);

    useEffect( () => {
        getCountries();
        getTotalPop();
    }, []);

    const getCountries = function () {
        fetch('https://restcountries.com/v3.1/all')
            .then (response => response.json())
            .then(data => setCountries(data))

    };

    const getTotalPop = () => {
        const popArray = countries.map((country) => {
            return country.population;
        });

        const total = popArray.reduce((runningTotal, currentValue) => {
            return runningTotal + currentValue
        }, 0)

        setTotalPop(total);
    }

    return (
        <>
        <h2>Total population of all countries:{totalPop}</h2>
        <CountrySelect />
        <CountryInfo />
        <CountryList countries = {countries}/>
        </>
    );


};

export default CountryBox;