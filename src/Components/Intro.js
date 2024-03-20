import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Mariful from '../assets/Mariful django developer python developer.jpg'
import python from '../assets/python.png'
import dj from '../assets/dj.png'
import drf from  '../assets/drf.png'
import js from  '../assets/js.png'
import react from '../assets/react.png'



const Intro = () => {
    const navigate = useNavigate()
  return (
    <div className="myself wrapper">
      <div className="myself__wrapper">
          <div>
              <div>
                <h1>
                  Hi !! <br/>
                  I am a Software <span>Developer</span> <br/>
                </h1>
                    <div className="line">
                    </div>

              </div>
              <div>
                <img src={Mariful} alt=''/> <br/>
                <h3 style={{textAlign:"center"}}>Mariful Islam <span>Saad</span></h3>
              </div>
          </div>
          <div>
            <button className='ping' onClick={()=>navigate('/contact')}>Ping Me</button>
          </div>
      </div>

        <div className='introduction'>
            <p>Eager to leverage my skills and expertise to contribute to
                <span> innovative</span> projects and drive <span>business</span> success</p>
            <p className='stack__img'>
                <img src={python} alt=''/>
                <img src={dj} alt=''/>
                <img src={drf} alt=''/>
                <img src={js} alt=''/>
                <img src={react} alt=''/>
            </p>
        </div>
    </div>
  )
}

export default Intro