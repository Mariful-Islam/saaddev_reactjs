import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './ServiceComponent.module.css'


const ServiceComponent = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    getServices()
  }, [])

  const getServices = async () => {
    const response = await fetch('http://saaddev.pythonanywhere.com/saad-dev-api/service_component/')
    const data = await response.json()
    setServices(data)
  }

  const name = 'web development'
  return (
    <div>
      <main class={style.service} id="service">
        <div class={style.heading}>
          <h1>Services</h1>
        </div>

        <div class={style.service__list}>
          <ul class={style.service__item}>
            {services?.map((service, i) => (
              <li key={i}><Link to={`/service/${service.id}/`}>
                {service.name}
              </Link></li>
            ))}
          </ul>
        </div>
        <Link to='/service/' className={style.see_all} >more</Link>
      </main>
    </div>
  )
}

export default ServiceComponent