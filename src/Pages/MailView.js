import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import back from '../assets/icon/back.svg'
import reply from '../assets/icon/reply.svg'
import style from './MailView.module.css'


const MailView = () => {
    const params = useParams()
    const [mail, setMail] = useState([])

    useEffect(() => {
        getMail()
    }, [])

    const getMail = async () => {
        const response = await fetch(`http://saaddev.pythonanywhere.com/saad-dev-api/mail_view/${params.id}/`)
        const data = await response.json()
        setMail(data)

        console.log(data)
    }
    return (
        <div>
            <div class={style.mail_view}>
                <Link to='/mails/' className={style.back_btn}><img src={back} alt='' />
                </Link>
                <div className={style.sender_name}>
                    <h3>{mail.username}| {mail.email}</h3>
                    <p><img src={reply} alt='' /></p>
                    <h5>{mail.get_date} <br /> {mail.get_time}</h5>
                </div>
                <div class="mail-subject">
                    <p>
                        <h4>Subject</h4>{mail.subject}</p>
                    <span id="mail-type">Inbox</span>
                </div>
                <div class="sender-message">
                    <h4>Message</h4>
                    <p>{mail.message}</p>
                </div>
            </div>
        </div>
    )
}

export default MailView