import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate()
  const menu = document.querySelector(".menu");
  const navMenu = () => {
    const navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
    menu = document.querySelector(".menu");
    menu.classList.toggle("bar");
  }

  const username = localStorage.getItem('username')
  const password = localStorage.getItem('password')
  console.log(window.location.pathname)
  return (
    <div>
      <header>
        <div className="logo">
          <h2>SAAD <span>DEV</span></h2>
        </div>
        <div className="menu" style={{ cursor: 'pointer', width: 30 }} onClick={navMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="nav-bar">
          <ul className="nav__list">
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/service/' >Service</NavLink></li>
            <li><NavLink to='/project/'>Project</NavLink></li>
            {/*<li><NavLink to='/client/'>Client</NavLink></li>*/}
            <li><button onClick={() => navigate('/contact')} className='contactme'>Contact</button></li>

            {/*  {(username && password) ?*/}
            {/*  <li><NavLink to='/mails/'>Mail</NavLink></li>*/}
            {/*  :*/}
            {/*  window.location.pathname==="/create_auth/" ? */}
            {/*  <li><NavLink to='/create_auth/'>Create Web Mail</NavLink></li> */}

            {/*  :*/}
            {/*  <li><NavLink to='/mail-auth/'>Mail Auth</NavLink></li>*/}

            {/*  }*/}
            {/*  {username==="saad" ? */}
            {/*  <li><NavLink to='/dashboard/all/'>Dashboard</NavLink></li>:<></>*/}
            {/*}*/}

          </ul>
        </div>

      </header>
    </div>
  )
}

export default Header