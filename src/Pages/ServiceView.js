import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../utils/api";
import { API_URL } from "../utils/interceptor";

const ServiceView = () => {
    const { id } = useParams()
    const api = useApi()
    const [service, setService] = useState([])

    useEffect(() => {
        getService()
    }, [])

    const getService = async () => {
        api.service(id).then((response) => setService(response.data)).catch((error) => console.log(error))
    }

    function desc() {
        return { __html: service.description };
    }


    return (
        <div className='service_view'>
            <h1>{service.name}</h1>
            <div>
                <img src={`${API_URL}${service.image}`} alt='' />
                <div className="service_view_desc">
                    <div dangerouslySetInnerHTML={desc()} />
                </div>
            </div>
        </div>
    )
}

export default ServiceView