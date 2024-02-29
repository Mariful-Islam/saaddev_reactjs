import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Project.module.css'
import github from '../assets/icon/github.svg'
import link from '../assets/icon/link.svg'


const Project = () => {

    let [projects, setProjects] = useState([])

    useEffect(()=>{
      getProjects()
    },[])

    let getProjects = async() => {
      let response = await fetch('http://saaddev.pythonanywhere.com/saad-dev-api/projects/')
      let data = await response.json()
      setProjects(data)
    }

    let [projectStats, setProjectStats] = useState([])

    useEffect(()=>{
      getProjectStats()
    },[])

    let getProjectStats = async() => {
      let response = await fetch('http://saaddev.pythonanywhere.com/saad-dev-api/project-statstic/')
      let data = await response.json()
      setProjectStats(data)
    }
  return (
    <div>
        <main class={style.project} id="project">
            <div class={style.project__title}>
                <h1>Projects</h1>
            </div>
            <div class={style.project__list}>
          {
              projects.map((project)=>(
            <div>

                <div className={style.project__image}>
                    <Link><img src={`https://saaddev.pythonanywhere.com/${project.image}`} alt="" /></Link>
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
        </main>
      <main className={style.project} id="project">
        <div className={style.heading}>
          <h3>Project Statstics</h3>
        </div>

      {/* Project Statstics Start */}
        <div className={style.table}>
          <div className={style.table_header}>
            <p>SL No</p>
            <p>Name</p>
            <p>Status</p>
            <p>Link</p>
          </div>
          
          {projectStats.map((projectStat)=>(

          <div className={style.table_data} styles="color: white;">
            <p>{projectStat.id}</p>
            <p>{projectStat.get_project_name}</p>
            <p>{projectStat.get_status}</p>
            <p><Link to={projectStat.get_project_link} target='_blank'>View</Link></p>
          </div>

          ))}
          
        </div>
    </main>
  {/* Project Statstics End  */}
    </div>
  )
}

export default Project