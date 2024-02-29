import React from 'react'
import { Link } from 'react-router-dom'
import Mariful from '../assets/Mariful django developer python developer.jpg'

const Intro = () => {
  return (
    <div className="myself wrapper">
      <div className="myself__wrapper">
          <div>
            <h1>
              Hi !! <br/>
              I am a Software Developer <br/>
            </h1>
              <div className="line">
          </div>
          </div>
          <div>
            <img src={Mariful} alt=''/> <br/>
            <h3 style={{textAlign:"center"}}>Mariful Islam Saad</h3>
          </div>
      </div>
        <div className='introduction'>
            <h1>Introduction</h1>
            <p>This is my portfolio website. Mainly, I work on django and reactjs for building efficient, cost effective, secured web application. On the other hand, I also work with react native for building cross platform mobile application like ios and android. Also, I extract data from web using python library like requests, beautifulsoup and python framework like scrapy. </p>
            <h2>Stack</h2>
            <p>
                Python <br/>
                Django <br/>
                Django Rest Framework <br/>
                Javascript <br/>
                ReactJS <br/>
                React Native <br/>
            </p>
        </div>
    </div>
  )
}

export default Intro