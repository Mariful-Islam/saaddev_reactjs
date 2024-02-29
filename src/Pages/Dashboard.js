import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'

import AllProject from "../Components/Dashboard/AllProject";
import SaadDev from '../Components/Dashboard/SaadDev'
import Ecommerce from '../Components/Dashboard/Ecommerce'
import Fin from '../Components/Dashboard/Fin'
import MMS from '../Components/Dashboard/MMS'
import Todo from '../Components/Dashboard/Todo'


const Dashboard = () => {
  
  return (
    <div className='dashboard'>
        <div className='dashboard_body'>
          <div className='side_nav'>
            <NavLink to='/dashboard/all/'>All</NavLink>
            <NavLink to='/dashboard/saaddev/'>SaadDev</NavLink>
            <NavLink to='/dashboard/ecommerce/'>Ecommerce</NavLink>
            <NavLink to='/dashboard/fin/'>FIN</NavLink>
            <NavLink to='/dashboard/mms/'>MMS</NavLink>
            <NavLink to='/dashboard/todo/'>Todo</NavLink>
          </div>
          <div className='main_component'>
              {window.location.pathname==="/dashboard/all/" ?
                    <AllProject/>:<></>
                }
              {window.location.pathname==="/dashboard/saaddev/" ? 
                <SaadDev/>:<></>  
            }      
              {window.location.pathname==="/dashboard/ecommerce/" ? 
                <Ecommerce/> :<></>  
            }      
              {window.location.pathname==="/dashboard/fin/" ? 
                <Fin/> :<></>  
            }      
              {window.location.pathname==="/dashboard/mms/" ? 
                <MMS/> :<></>  
            }      
              {window.location.pathname==="/dashboard/todo/" ? 
                <Todo/> :<></>  
            }      
          </div>
        </div>
    </div>
  )
}

export default Dashboard