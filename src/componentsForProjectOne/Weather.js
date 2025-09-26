import React, { useEffect, useState } from "react";

function Weather() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getWeather = async () => {
            const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

            if (!apiKey) {
                setError("API key is missing!");
                return;
            }

            try {
                const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Sitamarhi&appid=${apiKey}&units=metric`);

                if (!res.ok) {
                    throw new Error("Failed to fetch weather data");
                }

                const data = await res.json();
                setWeather(data);
            } catch (err) {
                setError(err.message);
            }
        };

        getWeather();
    }, []);

    return (
        <div>
            <h1>Weather App</h1>

            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            {(() => {
                if (weather) {
                    if (weather.main) {
                        return (
                            <div>
                                <p>City: {weather.name}</p>
                                <p>Temperature: {weather.main.temp}°C</p>
                            </div>
                        );
                    } else {
                        return <p>Weather data is unavailable</p>;
                    }
                } else {
                    return !error && <p>Loading weather data...</p>;
                }
            })()}
        </div>
    );
}

export default Weather;