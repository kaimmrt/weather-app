import React, { useState, useEffect } from 'react'
import { useWeather } from '../context/ApiContext'
import '../../src/App.css'
import Select from './Select'
import City from './City'

const Container = () => {

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    const d = new Date()
    const { weather } = useWeather()

    const [data, setData] = useState("");

    useEffect(() => {
        setData(weather)
    }, [weather])


    if (!data.daily)
        return null
    return (
        <div className="container">
            <br /><br />
            <City />
            <Select />
            <br /><br />
            <ul >
                {data.daily.map((value, index) => (
                    <li className="weather-table" >
                        <p style={{ marginTop: 8, marginLeft: 10, fontWeight: 'bold' }}>{days[((d.getDay() + index - 1) % 6)]}</p>
                        <div style={{ width: 70, height: 70, borderRadius: 35, background: '#8DE3FA', textAlign: 'center', marginLeft: 10, marginTop: 10 }}>
                            <img src={`http://openweathermap.org/img/w/${value.weather[0].icon}.png`} style={{ marginTop: 5, color: 'gray', width: 60, height: 60 }} />
                        </div>

                        <div style={{ display: 'flex', marginLeft: 20, marginTop: 18 }}>
                            <p style={{ marginRight: 5 }}>{parseInt(value.temp.max)}°</p>
                            <p style={{ color: 'gray' }}>{parseInt(value.temp.min)}°</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Container
