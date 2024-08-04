import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import abc from '../assets/abc.png'
import style from './ProjectComponent.module.css'
import github from '../assets/icon/github.svg'
import link from '../assets/icon/link.svg'
import { API_URL } from '../utils/interceptor'



const ProjectComponent = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        getServices()
    }, [])

    const getServices = async () => {
        const response = await fetch('http://saaddev.pythonanywhere.com/saad-dev-api/project_component/')
        const data = await response.json()
        setProjects(data)
    }

    return (
        <div>
            <main className={style.project} id="project">
                <div className={style.project__title}>
                    <h1><span>P</span>rojects</h1>
                </div>
                <div className={style.project__list}>
                    {
                        projects?.map((project, i) => (
                            <div key={i}>

                                <div className={style.project__image}>
                                    <Link><img src={`${API_URL}${project.image}`} alt="" /></Link>
                                </div>

                                <div className={style.project__detail}>
                                    <div className={style.project__name}>
                                        <Link>
                                            <p>
                                                {project.name}
                                            </p>
                                        </Link>
                                    </div>

                                    <div className={style.project__description}>
                                        <p>{project.description}</p>

                                    </div>

                                    <div className={style.project__link}>
                                        <Link to={project.github} target='_blank'><img src={github} alt='' /></Link>
                                        <Link to={project.link} target='_blank'><img src={link} alt='' /></Link>
                                    </div>

                                    {/*<div className={style.project__stack}>*/}
                                    {/*    <ul>*/}
                                    {/*        {project.get_stack_list?.map((stack, i)=>(*/}
                                    {/*          <li key={i}>{stack}</li>*/}
                                    {/*        ))}*/}
                                    {/*    </ul>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        ))}
                </div>
            </main>
        </div>
    )
}

export default ProjectComponent