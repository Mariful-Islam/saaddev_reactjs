import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";


const MMS = () => {

  // const [students, setstudents] = useState([])
  //
  // useEffect(()=>{
  //     getstudents()
  // }, [])
  //
  // const getstudents = async() => {
  //     const response = await fetch('/mms/students/')
  //     const data = await response.json()
  //     setstudents(data)
  // }

  const navigate = useNavigate()
  const username = localStorage.getItem('username')

  const [pays, setPays] = useState([])

  useEffect(() => {
    getPays()
  }, [])

  const getPays = async () => {
    const response = await fetch('http://saaddev.pythonanywhere.com/mms/payments/')
    const data = await response.json()
    setPays(data)
  }

  const totalTk = 0

  pays?.map((pay) => totalTk += pay.tk)

  const [students, setstudents] = useState([])

  useEffect(() => {
    getstudents()
  }, [])

  const getstudents = async () => {
    const response = await fetch('http://saaddev.pythonanywhere.com/mms/total_students/')
    const data = await response.json()
    setstudents(data)
  }

  return (
    <div className='dashboard_saaddev'>
      <h3>Mess Management System</h3>
      <div className='saaddev_components'>

        <div className='component_cards'>
          <div>
            <p>Students</p>
            <h3>{students.length}</h3>
          </div>
          <div>
            <p>Paid</p>
            <h3>{totalTk} tk</h3>
          </div>
          <div>
            <p>Total Paid Student</p>
            <h3>{pays.length}</h3>
          </div>
          <div>
            <p>User</p>
            <h3>{students.length}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MMS