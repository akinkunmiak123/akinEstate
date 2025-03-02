import React, { useState } from 'react'
import './WhatsAppChat.css'
import img from './icons8-whatsapp-100.png'

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const whatsappNumber = '09130000005' // Add your WhatsApp number here
  const prefilledMessage = 'Hi, I would like to...' // Pre-filled message

  return (
    <div className="whatsapp-container">
      <div className={`chat-popup ${isOpen ? 'open' : ''}`}>
        <div className="chat-header">
          <span>WhatsApp</span>
          <button className="close-btn" onClick={toggleChat}>
            ×
          </button>
        </div>
        <div className="chat-body">
          <p>
            Hello, I'm Fifo Juliet, Head of Sales at Findville Realty Ltd.
            <br />I will be happy to answer all your questions.
            <br />
            <br />
          </p>
          <a
            className="chat-btn"
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              prefilledMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open chat
          </a>
        </div>
      </div>
      <button className="whatsapp-button" onClick={toggleChat}>
        <img src={img} alt="WhatsApp" />
      </button>
    </div>
  )
}

export default WhatsAppChat
