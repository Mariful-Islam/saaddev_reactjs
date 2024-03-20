import React, { useState } from 'react'
import style from './Contact.module.css'



const Contact = () => {
  

  let [contactResponse, setContactResponse] = useState("")

  let contactForm = async(e) => {
    e.preventDefault()
    let name = e.target.username.value
    let email = e.target.email.value
    let subject = e.target.subject.value
    let message = e.target.message.value
       
    let response = await fetch('http://saaddev.pythonanywhere.com/saad-dev-api/contact_api/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({"username": name, "email": email, "subject": subject, "message": message})
      })
    let data = await response.json()

    setContactResponse(data)
  }


  


  return (
    <div>
      <main>
        <div className="contact__container">
            <div className="contact__form">
              <div className="contact__title">
                <h1>Contact With <span>Me</span> </h1>
              </div>
              {contactResponse ? 
              <p style={{color:"rgb(158, 84, 255)", textAlign:"center"}}>{contactResponse}</p>
              :
              <form method="post" onSubmit={(e)=>contactForm(e)}>
                <label for="name">Name</label>
                <input type="text" id="name" name="username" placeholder="Enter your name" />
                <label for="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" />
                <label for="Subject">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="Enter Subject" />
                <label for="message">Message</label>
                <textarea type="text" id="message" name="message" placeholder="Enter your message"></textarea>
                <input type="submit" value="Send" />
              </form>
}
            </div>
          </div>
      </main>

    </div>
  )
  }

export default Contact