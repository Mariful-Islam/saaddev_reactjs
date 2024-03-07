import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Service = () => {
  const navigate = useNavigate()
  let [services, setServices] = useState([])

  useEffect(()=>{
    getServices()
  },[])

  let getServices = async() => {
    let response = await fetch('http://saaddev.pythonanywhere.com/saad-dev-api/services/')
    let data = await response.json()
    setServices(data)
  }


  return (
    <div>
        <main className='service' id="service">
          <div className='heading'>
            <h1>Services</h1>
          </div>

          <div className='service__list'>
            <ul className='service__item'>
              {services.map((service)=>(
              <li onClick={()=>navigate(`/service/${service.id}`)}>
                <img src={`http://saaddev.pythonanywhere.com/${service.image}`} alt=''/>
                <br/>
                {service.name}
              </li>
              ))}
            </ul>
          </div>
        </main>
    </div>
  )
}

export default Service