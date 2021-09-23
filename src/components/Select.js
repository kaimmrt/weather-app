import React from 'react'
import cities from '../data/citiesData'
import { useWeather } from '../context/ApiContext'

const Select = () => {

    const { city, setCity } = useWeather()

    return (
        <div style={{ marginTop: '2%', marginLeft: '3%', background: '#8DE4FF', height: 60, width: '67%', borderRadius: 10 }}>
            <select style={{ width: 150, height: 40, borderRadius: 10, marginTop: 10, marginLeft: 20 }} defaultValue={city.plaka} onChange={(e) => setCity(cities[e.target.value - 1])}>
                {cities.map((item) => (
                    <option key={item.plaka} value={item.plaka}>
                        {item.il_adi}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Select
