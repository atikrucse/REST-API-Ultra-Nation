import React from 'react';
import './Country.css'
const Country = (props) => {
    
    const {name, population, flag} =props.country;
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className='country-info'>
            <h1>Country Name: {name}</h1>
            <img src={flag} alt="flag"/>
            <p>Population: {population}</p>
            
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;