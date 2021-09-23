import React from 'react'
import { useWeather } from '../context/ApiContext'

const City = () => {
    const { city } = useWeather()

    return (
        <div>
            <p style={{ fontSize: 60, fontWeight: 'bold', color: '#8DE3FA', fontFamily: 'monospace', marginLeft: '4%' }}> {city.il_adi}</p>
        </div>
    )
}

export default City
