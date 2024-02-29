import React, { useEffect, useState } from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import style from '../Components/ClientComponent.module.css'


const Client = () => {

  let [clients, setClients] = useState([])
  useEffect(()=>{
    getClients()
  },[])

  let getClients = async() => {
    let response = await fetch('http://saaddev.pythonanywhere.com/saad-dev-api/clients/')
    let data = await response.json()
    setClients(data)
  }

  return (
    <div>
      <main class={style.client} id="client">
        <div class="heading">
          <h1>Our Clients</h1>
        </div>



        <div class="client__list">
          
          <div id="client__slider">
              <Carousel showArrows={true} autoPlay={true} infiniteLoop={true} interval={1200}>
                        
                          {clients.map((client)=>(

                           <div>                        
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


      {/* <!-- Partnership Section Start --> */}

      <main>
        <section class="partnership">
          <div class="partnership__header">
            <h1>Partnership With</h1>
          </div>
          <div class="partnership__company">
            <ul class="company__list">
              <li>google</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
export default Client