import React from 'react'

const ContactForm = () => {
  return (
    <div>
        <form className="contact-form">
        <h2>Get in Touch</h2>

        <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Write your name" />
        </div>

        <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
        </div>

        <div className="input-group">
            <label>Message</label>
            <textarea placeholder="Your message..."></textarea>
        </div>

        <button type="submit">Send Message</button>
        </form>

    </div>
  )
}

export default ContactForm