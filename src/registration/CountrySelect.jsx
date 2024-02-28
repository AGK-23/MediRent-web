import React, { useState, useEffect } from 'react';
import Select from 'react-select';


const CountrySelect = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
        // Fetch the list of countries from the REST Countries API
        fetch('https://restcountries.com/v2/all')
            .then(response => response.json())
            .then(data => {
                const countryNames = data.map(country => ({
                    value: country.name,
                    label: country.name,
                }));
                setCountries(countryNames);
            })
            .catch(error => console.error('Error fetching countries:', error));
    }, []);
    const handleCountryChange = selectedOption => {
        setSelectedCountry(selectedOption);
        onSelectCountry(selectedOption); // Pass the selected country to the parent component
    };



    return (
        <div className='' >

            <Select className='text-left mb-8 outline-none h-10'
                id="country"
                options={countries}
                placeholder="canada"
                value={selectedCountry}
                onChange={handleCountryChange}

            />

        </div>
    );
};

export default CountrySelect;
