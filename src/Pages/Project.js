import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './Project.module.css'
import useApi from '../utils/api'
import { API_URL } from '../utils/interceptor'

const Project = () => {
  const api = useApi()
  const [projects, setProjects] = useState([])

  useEffect(() => {
    getProjects()
  }, [])

  const getProjects = async () => {
    api.projects().then((response) => setProjects(response.data)).catch((error) => console.log(error))
  }

  const [projectStats, setProjectStats] = useState([])

  useEffect(() => {
    getProjectStats()
  }, [])

  const getProjectStats = async () => {
    const response = await fetch('http://saaddev.pythonanywhere.com/saad-dev-api/project-statstic/')
    const data = await response.json()
    setProjectStats(data)
  }
  return (
    <div>
      <main class={style.project} id="project">
        <div class={style.project__title}>
          <h1><span>P</span>rojects</h1>
        </div>
        <div class={style.project__list}>
          {
            projects?.map((project, i) => (
              <div key={i}>

                <div className={style.project__image}>
                  <Link><img src={`${API_URL}${project.image}`} alt="" /></Link>

                </div>

                <div className={style.project__detail}>
                  <div className={style.project__name}>
                    <Link to={`/project/${project.id}`} >
                      {project.name}
                    </Link>
                  </div>

                  <div className={style.project__description}>
                    <p>{project.description}</p>

                  </div>

                  <div className={style.project__link}>
                    <Link to={project.frontend} target='_blank'>Frontend</Link>
                    <Link to={project.backend} target='_blank'>Backend</Link>
                    <Link to={project.link} target='_blank'>Live</Link>
                  </div>

                  <div className={style.project__stack}>
                    <ul>
                      {project.get_stack_list?.map((stack, i) => (
                        <li key={i}>{stack}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </main>
      <main className={style.project} id="project">
        <div className={style.project__title}>
          <h1><span>Project </span> Statstics</h1>
        </div>

        {/* Project Statstics Start */}
        <div className={style.table}>
          <div className={style.table_header}>
            <p>SL No</p>
            <p>Name</p>
            <p>Status</p>
            {/* <p>Link</p> */}
          </div>

          {projectStats?.map((projectStat, i) => (

            <div key={i} className={style.table_data} styles="color: white;">
              <p>{projectStat.id}</p>
              <p>{projectStat.get_project_name}</p>
              <p>{projectStat.get_status}</p>
              {/* <p><Link to={projectStat.get_project_link} target='_blank'>View</Link></p> */}
            </div>

          ))}

        </div>
      </main>
      {/* Project Statstics End  */}
    </div>
  )
}

export default Project