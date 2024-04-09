import React, { useState } from 'react';
import '../static/css/SearchBar.css'; // Import the CSS file

function SearchBar({ onResults }) {
    const [location, setLocation] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [serviceDate, setServiceDate] = useState('');
    const [serviceTime, setServiceTime] = useState('');
    const [error, setError] = useState('');

    const handleSearch = async () => {
        console.log('handleSearch called');
        // Basic validation example
        if (!location || !serviceType || !serviceDate || !serviceTime) {
            setError('All fields are required. Please fill them out.');
            return;
        }

        // Here you'd typically call a function to fetch data based on the search criteria.
        // Example: onResults(await dbSearch({ location, serviceType, serviceDate, serviceTime }));
        
        // Reset error if the search proceeds
        setError('');
    };

    return (
        <div id="SearchBar" className="search-container">
            <h1>Find your nearest car wash</h1>
            {error && <p className="error">{error}</p>}
            <div className="main-search-bar">
                <input
                    type="text"
                    placeholder="Enter Your ZipCode"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <select
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                >
                    <option value="">Select Service Type</option>
                    <option value="exterior">Exterior Wash</option>
                    <option value="full">Full Service Wash</option>
                    <option value="detailing">Detailing</option>
                    {/* Add more options as needed */}
                </select>
                <input
                    type="date"
                    value={serviceDate}
                    onChange={(e) => setServiceDate(e.target.value)}
                />
                <input
                    type="time"
                    value={serviceTime}
                    onChange={(e) => setServiceTime(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
        </div>
    );
}

export default SearchBar;
