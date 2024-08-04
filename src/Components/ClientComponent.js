import React, { useState, useEffect } from 'react';
import style from './ClientComponent.module.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const ClientComponent = () => {

  const [clients, setClients] = useState([])
  useEffect(() => {
    getClients()
  }, [])

  const getClients = async () => {
    const response = await fetch('http://saaddev.pythonanywhere.com/saad-dev-api/clients/')
    const data = await response.json()
    setClients(data)
  }
  return (
    <div>
      <main className={style.client} id="client">
        <div className={style.client__header}>
          <h3>Our Clients</h3>
        </div>



        <div className={style.client__list}>

          <div id="client__slider">
            <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={1200}>
              {clients?.map((client, i) => (

                <div key={i}>
                  <div className={style.client__name}>
                    <p>{client.name}

                    </p>
                  </div>
                  <div className={style.client__review}>
                    <p>{client.review}</p>
                  </div>
                </div>
              ))}
            </Carousel>

          </div>

        </div>
      </main>

    </div>
  )
}

export default ClientComponent