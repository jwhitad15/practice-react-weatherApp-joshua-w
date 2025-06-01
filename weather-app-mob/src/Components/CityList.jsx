import { Link } from "react-router";

const CityList = () => {
    const cities = ["NewYork", "London", "Tokyo"];

    return (
        <div className="city-list-container">
            <h1>Weather Forecast</h1>
            <h3>By City</h3>
            <ol>
                {cities.map((city) => (
                <li key={city}> <Link to={`/forecast/${city}`}> {city} </Link> </li>
                ))}
            </ol>
        </div>
    );
};
export default CityList;