import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import mail from '../assets/icon/mail.svg'
import pen from '../assets/icon/pencil.svg'
import logout from '../assets/icon/logout.svg'

import style from './Mail.module.css'
import { NavLink } from 'react-router-dom'
import dlt from '../assets/icon/trash.svg'
import open from '../assets/icon/open.svg'



const Mail = () => {


    const navigate = useNavigate()

    const [mails, setMails] = useState([])
    const [search, setSearch] = useState('')
    const [searchMail, setSearchMail] = useState(mails)

    const username = localStorage.getItem('username')
    const password = localStorage.getItem('password')

    useEffect(() => {
        getMails()
    }, [])

    const getMails = async () => {
        const response = await fetch('http://saaddev.pythonanywhere.com/saad-dev-api/mails/')
        const data = await response.json()
        setMails(data)

    }

    const mailLogout = () => {
        localStorage.removeItem('username')
        localStorage.removeItem('password')

        navigate('/mail-auth/')
        window.location.reload()
    }

    const [categoricalMail, setCategoricalMail] = useState([])

    const allMail = () => {
        setCategoricalMail([])
        setSearch('')
    }



    const inboxMail = () => {
        const inbox_mail = mails.filter((mail) =>
            mail.get_category.toLowerCase().includes('inbox')
        )
        setCategoricalMail(inbox_mail)
        setSearch('')
    }

    const sentMail = () => {
        const inbox_mail = mails.filter((mail) =>
            mail.get_category.toLowerCase().includes('sent')
        )
        setCategoricalMail(inbox_mail)
        setSearch('')
    }

    const draftMail = () => {
        const inbox_mail = mails.filter((mail) =>
            mail.get_category.toLowerCase().includes('draft')
        )
        setCategoricalMail(inbox_mail)
        setSearch('')
    }

    const spamMail = () => {
        const inbox_mail = mails.filter((mail) =>
            mail.get_category.toLowerCase().includes('spam')
        )
        setCategoricalMail(inbox_mail)
        setSearch('')
    }


    const onWrite = () => {
        navigate('/compose/')
    }


    const onDlt = async (id) => {
        const response = await fetch(`http://saaddev.pythonanywhere.com/saad-dev-api/mail_deconste/${id}/`, {
            method: "DEconstE",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await response.json()
        console.log(data)

        getMails()
    }


    const all_count = mails.length


    const inbox_count = mails.filter((mail) => mail.get_category.toLowerCase().includes('inbox')).length
    const sent_count = mails.filter((mail) => mail.get_category.toLowerCase().includes('sent')).length
    const draft_count = mails.filter((mail) => mail.get_category.toLowerCase().includes('draft')).length
    const spam_count = mails.filter((mail) => mail.get_category.toLowerCase().includes('spam')).length

    const searchHandle = (text) => {
        setSearch(text.target.value)
        const searchItems = mails.filter((mail) =>
            mail.username.toLowerCase().includes(search.toLowerCase()) ||
            mail.subject.toLowerCase().includes(search.toLowerCase()) ||
            mail.message.toLowerCase().includes(search.toLowerCase())
        )
        setSearchMail(searchItems)

    }




    return (
        <div>
            {username && password ?

                <section>
                    <div className={style.mail_container}>
                        <div className="mail-wrapper">
                            <h1 style={{ textAlign: "center" }}>
                                Mail
                            </h1>
                            <div className="mail-header">
                                <div className={style.mail_icon} >
                                    <img src={mail} alt='' />

                                </div>
                                <div className="mail_search">
                                    <form action="" method="GET">
                                        <input type="text" name="q" value={search} onChange={(text) => searchHandle(text)} placeholder="Search mail" />
                                    </form>
                                </div>
                                <div className="mail-compose" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10 }}>

                                    <p style={{ fontWeight: '600', backgroundColor: '#4afffc', padding: 5, borderRadius: 5 }}>{username}</p>
                                    <p style={{ cursor: 'pointer' }} onClick={mailLogout}><img src={logout} alt='' /></p>
                                </div>
                            </div>
                            <div className="mail-body">
                                <div className="mail_category">
                                    <ul>
                                        <li >
                                            <NavLink className="category_item" onClick={allMail} to='/mails/'>
                                                All
                                                <span id="mail-count">{all_count}</span>
                                            </NavLink>
                                        </li>
                                        <li onClick={inboxMail}>
                                            <NavLink className="category_item" to='/mail/inbox/'>
                                                Inbox
                                                <span id="mail-count">{inbox_count}</span>
                                            </NavLink>
                                        </li>
                                        <li onClick={sentMail}>
                                            <NavLink className="category_item" to='/mail/sent/' >
                                                Sent
                                                <span id="mail-count">{sent_count}</span>
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink className="category_item" to='/mail/draft/' onClick={draftMail}>
                                                Draft
                                                <span id="mail-count">{draft_count}</span>
                                            </NavLink>
                                        </li>

                                        <li>
                                            <NavLink className="category_item" to='/mail/spam/' onClick={spamMail}>
                                                Spam
                                                <span id="mail-count">{spam_count}</span>
                                            </NavLink>
                                        </li>


                                    </ul>
                                </div>

                                <div className="mail-box">
                                    <div className="mail-tool">
                                        <p>Total: <span id="mail-count">{search.length === 0 ? categoricalMail.length === 0 ? mails.length : categoricalMail.length : searchMail.length}</span></p>
                                        <p onClick={onWrite} className={style.write} style={{ cursor: 'pointer' }}><img src={pen} alt='' /></p>

                                    </div>

                                    <div className={style.mail_table}>
                                        <div className={style.table_head}>
                                            <h4>Name </h4>
                                            <h4>Message</h4>
                                            <h4>Time</h4>
                                            <h4>  </h4>
                                            <h4>  </h4>
                                        </div>
                                        <div className='table-data'>
                                            {search.length === 0 ?
                                                categoricalMail.length === 0 ?
                                                    <>
                                                        {mails?.map((mail, value) => (
                                                            <div className={style.table_body} key={value}>
                                                                <p>{mail.username}</p>
                                                                <p>{mail.message}</p>
                                                                <p style={{ fontSize: "0.65rem" }}>{mail.get_date} <br /> {mail.get_time}</p>

                                                                <span id="mail-type">{mail.get_category}</span>

                                                                <img src={dlt} alt=''
                                                                    onClick={() => onDlt(mail.id)}
                                                                    style={{ height: 15, width: 15, marginLeft: 10, marginBottom: 2, cursor: 'pointer' }}
                                                                />
                                                                <img src={open} alt='' onClick={() => navigate(`/mail-view/${mail.id}/`)}
                                                                    style={{ height: 15, width: 15, marginLeft: 10, cursor: 'pointer' }}
                                                                />
                                                            </div>
                                                        ))}
                                                    </>
                                                    :
                                                    <>
                                                        {categoricalMail?.map((mail, value) => (
                                                            <div className={style.table_body}>
                                                                <p>{mail.username}</p>
                                                                <p>{mail.message}</p>
                                                                <p style={{ fontSize: "0.65rem" }}>{mail.get_date} <br /> {mail.get_time}</p>

                                                                <span id="mail-type">{mail.get_category}</span>

                                                                <img src={dlt} alt=''
                                                                    onClick={() => onDlt(mail.id)}
                                                                    style={{ height: 15, width: 15, marginLeft: 10, marginBottom: 2, cursor: 'pointer' }}
                                                                />
                                                                <img src={open} alt='' onClick={() => navigate(`/mail-view/${mail.id}/`)}
                                                                    style={{ height: 15, width: 15, marginLeft: 10, cursor: 'pointer' }}
                                                                />
                                                            </div>
                                                        ))}
                                                    </>

                                                :
                                                <>
                                                    {searchMail?.map((mail, value) => (
                                                        <div className={style.table_body}>
                                                            <p>{mail.username}</p>
                                                            <p>{mail.message}</p>
                                                            <p style={{ fontSize: "0.65rem" }}>{mail.get_date} <br /> {mail.get_time}</p>

                                                            <span id="mail-type">{mail.get_category}</span>

                                                            <img src={dlt} alt=''
                                                                onClick={() => onDlt(mail.id)}
                                                                style={{ height: 15, width: 15, marginLeft: 10, marginBottom: 2, cursor: 'pointer' }}
                                                            />
                                                            <img src={open} alt='' onClick={() => navigate(`/mail-view/${mail.id}/`)}
                                                                style={{ height: 15, width: 15, marginLeft: 10, cursor: 'pointer' }}
                                                            />
                                                        </div>
                                                    ))}
                                                </>
                                            }</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                :
                <div>
                    <h2 style={{ color: 'red', textAlign: 'center', padding: 40, backgroundColor: 'gray', margin: 0, height: '60vh' }}>
                        Authentication Required <br />
                        <Link to='/mail-auth/' style={{ fontSize: '0.8rem' }}>Login</Link>
                    </h2>

                </div>

            }
        </div>
    )
}

export default Mail