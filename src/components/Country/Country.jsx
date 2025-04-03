import React, { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountries, handleVistedFlags}) => {
    const [visited,setVisited] = useState(false)

    const handleClick = ()=>{
        // if(visited === false){
        //     setVisited(true)
        // }else{
        //     setVisited(false)
        // }
        setVisited(!visited)
        handleVisitedCountries(country)
    }
    

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img width={300} height={200} src={country.flags.png} alt={country.flags.alt} />
            <h3>Name: {country.name.common}</h3>
            <p>Independent: {country.independent? "Free" : "Not Free"}</p>
            <p>Population: {country.population}</p>
            <button className='btn' onClick={handleClick}>{visited ? "Visited" : "Not visited"}</button>
            <button onClick={()=>handleVistedFlags(country.flags.png)} className='btn'>Visited Flags</button>
        </div>
    );
};

export default Country;