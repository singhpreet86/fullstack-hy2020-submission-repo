import React, {useEffect, useState} from "react";
import axios from 'axios';

const ShowResult = (props) => {
    const handleClick = (name) => {
        if (name.length >= 1) {
            axios.get(`https://restcountries.com/v3.1/name/${name}`)
                .then(response => {
                    const countries = response.data;
                    props.setSingleCountryResult(countries)
                })
        }
    }

    const count = props.result.length
    if (count > 10) {
        return (
            <div>
                <p>Too many matches, specify another filter</p>
            </div>
        )
    } else if (count === 1) {
        const countryDetail = props.result[0]
        const flag = countryDetail.flags["png"]
        return (
            <div>
                <h3> {countryDetail.name.common} </h3>
                <p> capital {countryDetail.capital} </p>
                <p> area {countryDetail.area} </p>
                <h3>languages:</h3>
                {Object.values(countryDetail.languages).map(value => (
                    <li key={value}>{value}</li>
                ))}
                <p>
                    <img src={flag}/>
                </p>

                <h3> weather of {countryDetail.name.common}</h3>
                <p> temperature - {props.weatherResult.main.temp} Celcius </p>
                <img src={"https://openweathermap.org/img/wn/"+ props.weatherResult.weather[0].icon +"@2x.png"} alt="missing image"/>
                <p> wind - {props.weatherResult.wind.speed} m/s </p>
            </div>
        )
    } else {
        return (
            <div>
                {props.result.map((country, i) => (
                    <li key={i}>{country.name.common}
                        <button onClick={() => handleClick(country.name.common)}>show</button>
                    </li>
                ))}
            </div>
        )

    }

}

const App = () => {
    const api_key = process.env.REACT_APP_API_KEY

    const [country, setCountry] = useState('a')
    const [result, setResult] = useState([])
    const [singleCountryResult, setSingleCountryResult] = useState([])
    const [weatherResult, setWeatherResult] = useState([])

    const handleChange = (event) => {
        setCountry(event.target.value)
    }

    useEffect(() => {
        if (country.length >= 1) {
            axios.get(`https://restcountries.com/v3.1/name/${country}`)
                .then(response => {
                    const countries = response.data;
                    setResult(countries)
                    setSingleCountryResult([])
                })
        }

        axios.get(`data/2.5/weather?q=${country}&appid=${api_key}`)
            .then(response => {
                const weather = response.data;
                setWeatherResult(weather)
            })

    }, [country])

    return (
        <div>
            <input name={country} onChange={handleChange}/>
            <ShowResult result={result} singleCountryResult={singleCountryResult}
                        setSingleCountryResult={setSingleCountryResult} weatherResult={weatherResult}
                        setWeatherResult={setWeatherResult}/>
            <div>
                {singleCountryResult.length > 0 &&
                <div>
                    <h3> {singleCountryResult[0].name.common} </h3>
                    <p> capital {singleCountryResult[0].capital} </p>
                    <p> area {singleCountryResult[0].area} </p>
                    <h3>languages:</h3>
                    {Object.values(singleCountryResult[0]?.languages).map(value => (
                        <li key={value}>{value}</li>
                    ))}
                    <p>
                        <img src={singleCountryResult[0]?.flags["png"]} alt="missing text"/>
                    </p>

                </div>
                }
            </div>
        </div>
    )
}

export default App