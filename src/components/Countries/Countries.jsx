import React, { use } from 'react';

const Countries = ({restCountries}) => {

    const countries = use(restCountries)
    console.log(countries)
    return (
        <div>
            <h1>Traveling Countries</h1>
        </div>
    );
};

export default Countries;