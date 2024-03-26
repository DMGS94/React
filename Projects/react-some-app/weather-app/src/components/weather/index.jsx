import {useEffect, useState} from 'react';
import Search from '../search';

export default function Weather() {
    const [search, setSearch] = useState('');
    const [loading,setLoading] = useState(false);
    const [weatherData,setWeatherData] = useState(null);

    async function fetchWeatherData(param) {
        setLoading(true);
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid={API_KEY}`);
            const data = await response.json();
            if (data) {
                setWeatherData(data);
                setLoading(false);
            }

        } catch (error) {
            console.log(error);
        }
    }

    async function handleSearch() {
        fetchWeatherData(search);
    }

    function getCurrentData() {
        return new Date().toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'});
            
    }


    console.log(weatherData);

    return (
        <div>
            <Search 
                search={search}
                setSearch={setSearch}
                handleSearch={handleSearch}
            />
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <div className=''>
                        <h1>City: {weatherData?.name}, {weatherData?.sys.country}</h1>
                        <h2>Description: {weatherData?.weather[0].description}</h2>
                        <h3>Temperature: {Math.round(weatherData?.main.temp - 273.15)}°C</h3>
                    </div>
                    <div>
                        <span className=''>
                            {getCurrentData()}
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}