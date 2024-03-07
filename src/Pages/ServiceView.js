import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

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
      function desc() {
          return {__html: service.description};
        }


    return (
        <div className='service_view'>
            <h1>{service.name}</h1>
            <div>
                <img src={`http://saaddev.pythonanywhere.com/${service.image}`} alt=''/>
                <div className="service_view_desc">
                    <div dangerouslySetInnerHTML={desc()} />
                </div>
            </div>
        </div>
    )
}

export default ServiceView