import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import abc from '../assets/abc.png'
import style from './ProjectComponent.module.css'
import github from '../assets/icon/github.svg'
import link from '../assets/icon/link.svg'



const ProjectComponent = () => {
    let [projects, setProjects] = useState([])

    useEffect(()=>{
        getServices()
    },[])

    let getServices = async() => {
        let response = await fetch('http://saaddev.pythonanywhere.com/saad-dev-api/project_component/')
        let data = await response.json()
        setProjects(data)
    }

  return (
    <div>
        <main className={style.project} id="project">
            <div className={style.project__title}>
                <h1>Project</h1>
            </div>
            <div className={style.project__list}>
            {projects.map((project)=>(
                <div>

                    <div className={style.project__image}>
                    <Link><img src={`http://saaddev.pythonanywhere.com/${project.image}`} alt="" /></Link>
                    </div>

                    <div className={style.project__detail}>
                    <div className={style.project__name}>
                        <Link>
                        <p>{project.name}

                        </p>
                        </Link>
                        <hr/>
                    </div>

                    <div className={style.project__description}>
                        <p>{project.description}</p>

                    </div>

                    <div className={style.project__link}>
                        <Link to={project.github} target='_blank'><img src={github} alt=''/></Link>
                        <Link to={project.link} target='_blank'><img src={link} alt=''/></Link>
                    </div>

                    <div className={style.project__stack}>
                        <ul>
                            {project.get_stack_list.map((stack)=>(
                              <li>{stack}</li>
                            ))}
                        </ul>
                    </div>
                    </div>
                </div>
                ))}
            </div>
            <Link to='/project/' className={style.see_all} >more</Link>
        </main>
    </div>
  )
}

export default ProjectComponent