import React from 'react'

const Wheather = (props) => {
    let {
        temp,
        humidity,
        pressure,
        speed,
        weatherMood,
        country,
        sunset
    } = props  ; 


    let x = sunset ; 
    let date = new Date(x*1000)
    let sunset_value = `${date.getHours()}:${date.getMinutes()}`
  return (
    <div>
         <div >
                <div className="temp-card flex items-center border border-red-900 justify-center flex-col">
                    <div className="img">
                        <img src="./images/maggi.jpg" alt="" />
                    </div>
                    <div>
                        <div className="temp-ingo">
                            <span>{temp}</span>
                            <span>Cloudy</span>
                            <span>{country}</span>
                        </div>
                        <div>

                            <span>
                                {new Date().toLocaleString()}
                            </span>
                        </div>
                    </div>


                    <div className="more-info">

                        <div>
                            <div>logo</div>
                            <div>
                                <span>{sunset_value}</span>
                                <span>sunset</span>

                            </div>
                        </div>


                        <div>
                            <div>logo</div>
                            <div>
                                <span>humid</span>
                                <span>{humidity}</span>

                            </div>
                        </div>

                        <div>
                            <div>logo</div>
                            <div>
                                <span>pressure</span>
                                <span>{pressure}</span>

                            </div>
                        </div>

                        <div>
                            <div>logo</div>
                            <div>
                                <span>wind</span>
                                <span>{speed}</span>

                            </div>
                        </div>


                    </div>

                </div>
            </div>
    </div>
  )
}

export default Wheather