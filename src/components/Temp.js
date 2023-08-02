import React, { useEffect, useState } from 'react'
import Wheather from './Wheather'

const Temp = () => {

    const [searchValue, setsearchValue] = useState("pune")

    const [fetchInfo, setfetchInfo] = useState({})

    let getWeatherInfo = async () => {
        try {

            let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=137ad65f261093f01030eb475283e61f`

            let response = await fetch(url)
            let data = await response.json();
            console.log(data)

            // by object destricturing
            let { temp, humidity, pressure } = data.main;
            let { speed } = data.wind;
            let { main: weatherMood } = data.weather[0]
            let { country, sunset } = data.sys

            let weatherInfo = {
                temp,
                humidity,
                pressure,
                speed,
                weatherMood,
                country,
                sunset
            }

            setfetchInfo(weatherInfo)
        }
        catch (error) {
            console.log(error)

        }

    }

    useEffect(() => {
        getWeatherInfo()
    }, [])



    return (
        <>
            <div className="flex  h-full items-center justify-center flex-col "></div>
            <div className='border border-red-600 flex items-center justify-center'>
                <input value={searchValue} onChange={(e) => setsearchValue(e.target.value)} type="text" placeholder='Enter city name' autoComplete='false' />
                <button onClick={getWeatherInfo} className='bg-green-300 '>Search</button>

            </div>
            <Wheather
                temp={fetchInfo.temp}
                humidity={fetchInfo.humidity}
                pressure={fetchInfo.pressure}
                country={fetchInfo.country}
                speed={fetchInfo.speed}
                weatherMood={fetchInfo.weatherMood}
                sunset={fetchInfo.sunsetpressure}
            />
        </>
    )
}

export default Temp