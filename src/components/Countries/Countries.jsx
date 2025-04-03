import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({restCountries}) => {
    const [visitedCountries, setVistedCountries] = useState([])
    const [vistedFlags,setVisitedFlags] = useState([])

    const countries = use(restCountries)

    const handleVisitedCountries = (country)=>{
        console.log('Visited Countries',country)
        const newVistedCountries = [...visitedCountries, country]
        setVistedCountries(newVistedCountries)
    }

    const handleVistedFlags = (flags)=>{
        const newVistedFlags = [...vistedFlags, flags]
        setVisitedFlags(newVistedFlags)
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
            {
                vistedFlags.map(flag=><img src={flag} width={100} height={100}/>)
            }
            <div className='countries'>
                {
                    countries.map(country=><Country handleVisitedCountries={handleVisitedCountries} handleVistedFlags={handleVistedFlags} key={country.cca3} country={country}></Country>)
                }
            </div>            
        </div>
    );
};

export default Countries;