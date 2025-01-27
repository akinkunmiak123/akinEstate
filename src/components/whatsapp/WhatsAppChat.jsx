import React, { useState } from 'react'
import './WhatsAppChat.css'

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

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
          </p>
          <button className="chat-btn">Open chat</button>
        </div>
      </div>
      <button className="whatsapp-button" onClick={toggleChat}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </button>
    </div>
  )
}

export default WhatsAppChat
