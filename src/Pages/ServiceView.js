import React, {useEffect, useState} from "react";
import {useParams} from "react-router";

let ServiceView = () => {
    let {id} = useParams()
    let [service, setService] = useState([])

    useEffect(()=>{
        getService()
      },[])

      let getService = async() => {
        let response = await fetch(`http://saaddev.pythonanywhere.com/saad-dev-api/service/${id}/`)
        let data = await response.json()
        setService(data)
      }
      let desc = service.description
    return (
        <div className='service_view'>
            <h3>{service.name}</h3>
            <div>
                <img src={`http://saaddev.pythonanywhere.com/${service.image}`} alt=''/>
                <div className="service_view_desc">
                    <p>{desc.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceView