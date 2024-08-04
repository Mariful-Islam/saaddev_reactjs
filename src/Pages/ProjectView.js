import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import useApi from '../utils/api'

function ProjectView() {
    const { id } = useParams()
    const api = useApi()
    const [project, setProject] = useState('')
    useEffect(() => {
        getProject()
    }, [])
    const getProject = () => {
        api.project(id).then((response) => setProject(response.data)).catch((error) => console.log(error))
    }
    return (
        <div className='wrapper' style={{ backgroundColor: 'white', border: '1px solid #ece3ec', padding: 10, borderRadius: 7 }}>
            <div style={{ textAlign: 'center', paddingTop: 50 }}>
                <h1>{project.name}</h1>
            </div>
            <div style={{ paddingTop: 30, display: 'flex', justifyContent: 'center', gap: 30 }}>
                <Link to={project.frontend} target='__blank'>Frontend</Link>
                <Link to={project.backend} target='__blank'>Backend</Link>
                <Link to={project.link} target='__blank'>Live</Link>
            </div>
            <div style={{ paddingTop: 40 }}>
                <div dangerouslySetInnerHTML={{ __html: project.description }} />
            </div>
            <div className='project__stack' style={{ paddingTop: 40 }}>
                <ul>
                    {project.get_stack_list?.map((stack, i) => (
                        <li key={i} >{stack}</li>
                    ))}
                </ul>
            </div>

        </div>
    )
}

export default ProjectView