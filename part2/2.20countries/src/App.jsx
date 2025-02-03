import {useState, useEffect} from "react";
import axios from "axios";
import Country from "./components/Country.jsx";

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api"
const api_key = import.meta.env.VITE_SOME_KEY
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}


const App = () => {
    const [filter, setFilter] = useState("");
    const [countries, setCountries] = useState([]);

    //First Data Fetch
    useEffect(() => {
        axios.get(`${baseUrl}/all`)
            .then((response) => {
                setCountries(response.data)
            })
    },[])


    const showCountries = () => {
        const countriesShown = filter.length !== 0 ? countries.filter((country) => country.name.common.toLowerCase().includes(filter.toLowerCase()))
            : [];

        if (countriesShown.length <= 10) {
            if (countriesShown.length === 1) {
                return countriesShown.map((country) => {
                    const name = country.name.common
                    const capital = country.capital
                    const official_name = country.name.official
                    return (
                        <div key={official_name}>
                            <h1>{name}</h1>
                            <p>Capital: {capital}</p>
                            {country.languages && Object.entries(country.languages)
                                .map(([code, language]) => <li key={code}>{language}</li>)
                            }
                            <br/>
                            <img src={country.flags.png} alt={country.flags.alt}/>
                        </div>
                    );
                });
            }
            return countriesShown.map((country) =>
                <Country key={country.name.official} country={country} />
            );
        }
        return <p>Please Be more Specific!</p>
    }


    return (
        <>
            <p>Find Country <input type="text" value={filter} onChange={(event) => setFilter(event.target.value)}/></p>
            {showCountries()}
        </>
    )
}

export default App
