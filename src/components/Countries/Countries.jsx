import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({restCountries}) => {
    const [visitedCountries, setVistedCountries] = useState([])

    const countries = use(restCountries)

    const handleVisitedCountries = (country)=>{
        console.log('Visited Countries',country)
        const newVistedCountries = [...visitedCountries, country]
        setVistedCountries(newVistedCountries)
    }

    return (
        <div>
            <h1>Traveling Countries:{countries.length}</h1>
            <h3>Travaled so far: {visitedCountries.length}</h3>
            <ol>
                {
                    visitedCountries.map(country=><li>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
                {
                    countries.map(country=><Country handleVisitedCountries={handleVisitedCountries} key={country.cca3} country={country}></Country>)
                }
            </div>            
        </div>
    );
};

export default Countries;