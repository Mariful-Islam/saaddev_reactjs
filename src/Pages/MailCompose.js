import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './MailCompose.module.css'
import back from '../assets/icon/back.svg'
import { type } from '@testing-library/user-event/dist/type'


const MailCompose = () => {

    // let [mails, setMails] = useState({
    //     email: "",
    //     subject: "",
    //     message: "",
    //     type: ""
    // })

    let [res, setRes] = useState("")


    let formHandler = async(e) => {
        e.preventDefault()
        let response = await fetch('http://saaddev.pythonanywhere.com/saad-dev-api/mail_write/', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({email: e.target.email.value, subject: e.target.subject.value, message: e.target.message.value, category: 3})
        })
        let data = await response.json()
        setRes(data)
    }



  return (
    <div>
        <main>
            <div className={style.compose_container}>
                <div className="compose-wrapper">
                    <Link to='/mails/' ><img style={{height:20, width:20}} src={back} alt=''/></Link>
                    <form method="POST" className="compose-form" onSubmit={(e)=>formHandler(e)}>
                        {res}
                        <input type="text" name="email"  placeholder="Receiver Email"/>
                 
                        <input type="text" name="subject" placeholder="Subject"/>
                      
                        <input type="text" name="message" placeholder="Type your message"/>
                       
                        <input style={{height: 30, width: 100, backgroundColor: "4afffc"}} type='submit' value='Send' />

                    </form>
                </div>
            </div>
        </main>
    </div>
  )
}

export default MailCompose