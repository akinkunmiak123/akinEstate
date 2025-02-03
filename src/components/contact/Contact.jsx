import React, { useState } from 'react'
import img from '../images/pricing.jpg'
import Back from '../common/Back'
import './contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, subject, message } = formData

    const phone = '09068457292' // Replace with your WhatsApp number
    const whatsappMessage = `Hello, my name is ${name}.\n\nSubject: ${subject}\n\nMessage: ${message}\n\nYou can reply to me at: ${email}.`
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
      whatsappMessage
    )}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <section className="contact mb">
        <Back
          name="Need Help"
          title="Get Help & Friendly Support"
          cover={img}
        />
        <form className="shadow" onSubmit={handleSubmit}>
          <h4>Fill up The Form</h4>
          <br />
          <div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            cols="30"
            rows="10"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <div className="center">
            <button type="submit">Send via WhatsApp</button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Contact
