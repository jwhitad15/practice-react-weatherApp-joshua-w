import { BrowserRouter as Router, Routes, Route } from
"react-router";
import CityList from "./Components/CityList";
import CityForecast from "./Components/CityForecast";



function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<CityList/>}/>
                <Route path="/forecast/:cityName" element={<CityForecast/>} />
            </Routes>
        </Router>
    );
}
export default App;