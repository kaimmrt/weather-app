import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";
import cities from '../data/citiesData'

const APIContext = createContext();

export const APIContextProvider = ({ children }) => {
    const [city, setCity] = useState(cities[33])
    const [weather, setWeather] = useState([])

    const apiKey = process.env.REACT_APP_API_KEY

    useEffect(() => {
        async function fetchData() {

            const { data } = await axios(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude=current&appid=${apiKey}&units=metric`
            );
            setWeather(data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function fetchData() {

            const { data } = await axios(
                `https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&exclude=current&appid=${apiKey}&units=metric`
            );
            setWeather(data);
        }
        fetchData();
    }, [city]);

    const values = {
        weather,
        city,
        setCity
    }

    return (
        <APIContext.Provider value={values}>
            {children}
        </APIContext.Provider>
    );
}

export const useWeather = () => useContext(APIContext)