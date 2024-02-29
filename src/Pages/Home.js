import React from 'react'
import Intro from '../Components/Intro'
import ServiceComponent from '../Components/ServiceComponent'
import ProjectComponent from '../Components/ProjectComponent'
import ClientComponent from '../Components/ClientComponent'


const Home = () => {
  return (
    <div>
      <Intro/>
      <ProjectComponent/>
    </div>
  )
}

export default Home