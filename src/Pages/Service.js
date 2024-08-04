import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useApi from '../utils/api'
import { API_URL } from '../utils/interceptor'


const Service = () => {
  const api = useApi()
  const navigate = useNavigate()
  const [services, setServices] = useState([])
  console.log(services)

  useEffect(() => {
    getServices()
  }, [])

  const getServices = () => {
    api.services().then((response) => setServices(response.data)).catch((error) => console.log(error))
  }


  return (
    <div>
      <main className='service' id="service">
        <div>
          <h1><span>S</span>ervices</h1>
        </div>

        <div className='service__list'>
          <ul className='service__item'>
            {services?.map((service, i) => (
              <li key={i} onClick={() => navigate(`/service/${service.id}`)}>
                <img src={`${API_URL}${service.image}`} alt='' />

                <strong>{service.name}</strong>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Service