
import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";

const weatherData = {
    NewYork: {
        summary: "Sunny, 25°C",
        details: "Clear skies throughout the day with mild temperatures.",
    },
    London: {
        summary: "Cloudy, 18°C",
        details: "Overcast with occasional light rain in the afternoon.",
    },
    Tokyo: {
        summary: "Rainy, 22°C",
        details: "Continuous rain expected throughout the day.",
    },
};

const CityForecast = () => {

    const { cityName } = useParams();
    const [forecast, setForecast] = useState(null);
    const detailsRef = useRef(null);

    useEffect(() => {
        // Simulate fetching data
        setForecast(weatherData[cityName] || { summary: "No data available" });
        }, [cityName]);
        const scrollToDetails = () => {detailsRef.current.scrollIntoView({ behavior: "smooth" })};


    if (!forecast) return <p>Loading...</p>;
    
    return (
        <div>
            <h1>Weather Forecast for {cityName}</h1>
            <p>{forecast.summary}</p>
            
            {forecast.details && (
                <>
                    <button onClick={scrollToDetails}>View Details</button>
                    <div ref={detailsRef}>
                        <p>{forecast.details}</p>
                    </div>
                </>
            )}
        </div>
    );
};

export default CityForecast;