import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Service.module.css'

const Service = () => {
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
        <main class={style.service} id="service">
          <div class={style.heading}>
            <h1>Services</h1>
          </div>

          <div class={style.service__list}>
            <ul class={style.service__item}>
              {services.map((service)=>(
              <li><Link to={`/service/${service.id}`}>
                {service.name}
              </Link></li>
              ))}
            </ul>
          </div>
        </main>
    </div>
  )
}

export default Service