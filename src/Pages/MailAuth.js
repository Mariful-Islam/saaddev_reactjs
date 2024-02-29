import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './MailAuth.module.css'



const MailAuth = () => {
    const navigate = useNavigate()
    

    let [errorMsg, setErrorMsg] = useState("")
    

    let mailAuth = async(e) => {
        e.preventDefault()
        let username = e.target.username.value
        let password = e.target.password.value
        let response = await fetch(`http://saaddev.pythonanywhere.com/saad-dev-api/web_mail_auth/${username}/${password}/`)
        let data = await response.json()
        console.log(data.username)

        if (data.username === username && data.password === password){
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            navigate('/mails/')
            window.location.reload()
        }else{
            setErrorMsg("Invalid username or password")
        }
        }




    let createWebMail = () => {
        navigate('/create_auth/')
        window.location.reload()
    }

  return (
    <div className={style.mail_auth}>
        <h3>Mail Login</h3>
        
            <form method='POST' onSubmit={(e)=>mailAuth(e)}>
            <p>{errorMsg}</p>
     
                <input type='text' name='username' placeholder='username' />
                <br/>
    
                <input type='password' name='password' placeholder='password' />
                <br/>
                <input type='submit' value='Login' />
            </form>

            <p onClick={createWebMail} 
            style={{
                color:'white', 
                cursor:'pointer', 
                marginTop: 50,
                textDecoration: 'underline',
                fontSize: '0.8rem',
                
                }}>
                
                Create WebMail Account
            </p>
            
    </div>
  )
}

export default MailAuth