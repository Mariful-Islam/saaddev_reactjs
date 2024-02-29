import React, { useState } from 'react'
import style from './CreateMailAuth.module.css'
import { Link, useNavigate } from 'react-router-dom'


const CreateMailAuth =  () => {

    const navigate = useNavigate()

    let [created, setCreated] = useState("")
    let [error, setError] = useState("")

    let createAccount = async (e) => {

        let username = e.target.username.value
        let email =  e.target.email.value
        let password = e.target.password1.value

        e.preventDefault()
        if (e.target.password1.value===e.target.password2.value){
        let response = await fetch('http://saaddev.pythonanywhere.com/saad-dev-api/create_auth/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: username,
                email: email, 
                password: password})
        })
        let data = await response.json()

        localStorage.setItem('username', e.target.username.value)
        localStorage.setItem('password', e.target.password1.value)
        
        console.log(data)
        navigate('/mails/')


    }else{
        setError("Password does not match !!")
    }
}

    let loginWebMail = () => {
        navigate('/mail-auth/')
        window.location.reload()
    }

  return (
    <div className={style.mail_auth}>
        <h3>Create Web Mail Account</h3>
        {created ? 
            <p>{created}</p> &&
            <Link to='/mail-auth/' >Go to login</Link>
            
        :
        <form method='POST' onSubmit={(e)=>createAccount(e)}>
            <p>{error}</p>
     
                <input type='text' name='username' placeholder='Username' />
                <br/>
    
                <input type='email' name='email' placeholder='Email' />
                <br/>

                <input type='password' name='password1' placeholder='Password' />
                <br/>

                <input type='password' name='password2' placeholder='Confirm password' />
                <br/>

                <input type='submit' value='Create' />


                <p onClick={loginWebMail} 
                style={{
                color:'white', 
                cursor:'pointer', 
                marginTop: 50,
                textDecoration: 'underline',
                fontSize: '0.8rem',
                
                }}>
                
                Login WebMail Account
            </p>
        </form>

        }

    </div>
  )
}

export default CreateMailAuth