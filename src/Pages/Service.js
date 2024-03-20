import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import arrRight from '../assets/arrow_right.png'



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
          <div>
            <h1><span>S</span>ervices</h1>
          </div>

          <div className='service__list'>
            <ul className='service__item'>
              {services.map((service)=>(
              <li onClick={()=>navigate(`/service/${service.id}`)}>
                <img src={`http://saaddev.pythonanywhere.com/${service.image}`} alt=''/>

                <strong>{service.name}</strong>
                {/*<p>Read More <img src={arrRight}/></p>*/}
              </li>
              ))}
            </ul>
          </div>
        </main>
    </div>
  )
}

export default Service