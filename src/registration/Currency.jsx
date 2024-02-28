import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';

function CurrencySelect() {
    const [currencies, setCurrencies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedCurrency, setSelectedCurrency] = useState(null);

    useEffect(() => {
        const fetchCurrencies = async () => {
            try {
                const response = await axios.get('https://currencyapi.net/api/v1/currencies', {
                    params: {
                        key: 'Ln14rvlskIx2nFKwB2JUYU80j08JUTRrqiLa',
                        output: 'JSON',
                    },
                });

                const currencyList = Object.entries(response.data.currencies).map(([code, name]) => ({
                    value: code,
                    label: `${name} (${code})`,
                }));

                setCurrencies(currencyList);
                // console.log("currency..", currencies)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching currencies:', error.message);
            }
        };

        fetchCurrencies();
    }, []);

    const handleCurrencyChange = (event) => {
        setSelectedCurrency(event.target.value);
    };

    if (loading) {
        return <p>Loading currencies...</p>;
    }

    return (
        <div className="">
            {/* <Select 
                className='className="w-full p-4 rounded-md border border-gray-300  focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"'
                options={currencies}
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                isSearchable
            /> */}

            {currencies ? (
                <select
                onChange={handleCurrencyChange}
                value={selectedCurrency}
                className="w-full px-6 rounded-md border border-gray-300 md:py-4 xs:py-2 focus:border-gray-400 focus:ring-1 focus:ring-gray-400 focus:outline-none input active:outline-none focus:shadow-md"
            >
                <option value="">Select a Currency</option>
                {currencies?.map((currency, index) => (
                    <option key={index} value={currency.value}>
                        {currency.label}
                    </option>
                ))}
            </select>

            ): (
                <div>loading</div>
            )}
        </div>
    );
}

export default CurrencySelect;
