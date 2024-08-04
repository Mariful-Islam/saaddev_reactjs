import useInterceptor from "./interceptor"



const useApi = () => {
    const interceptor = useInterceptor()
    const api = {
        services: () => interceptor.get(`/saad-dev-api/services/`),
        service: (id) => interceptor.get(`/saad-dev-api/service/${id}/`),
        projects: () => interceptor.get(`/saad-dev-api/projects/`),
        project: (id) => interceptor.get(`/saad-dev-api/project/${id}/`),

    }
    return api
}

export default useApi