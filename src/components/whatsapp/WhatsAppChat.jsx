import React, { useState } from 'react'
import './WhatsAppChat.css'
import img from './icons8-whatsapp-100.png'
import Agent from './agent.jpg'

const WhatsAppChat = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }
  const [showWelcome, setShowWelcome] = useState(true)

  const whatsappNumber = '09130000004' // Add your WhatsApp number here
  const prefilledMessage = 'Hi, I would like to...' // Pre-filled message

  return (
    <div className="whatsapp-container">
      {/* Welcome Message */}
      {showWelcome && (
        <div className="whatsapp-welcome">
          <div className="agent-wrapper">
            <img src={Agent} alt="Fifo Juliet" />
            <span className="status-dot" />
          </div>
          <div className="welcome-text">
            <strong>Fifo Juliet</strong>
            <span>Hi, how can I help you?</span>
          </div>
          <button
            className="close-welcome"
            onClick={() => setShowWelcome(false)}
          >
            ×
          </button>
        </div>
      )}

      {/* Chat Popup */}
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

      {/* WhatsApp Button */}
      <button className="whatsapp-button" onClick={toggleChat}>
        <img src={img} alt="WhatsApp" />
      </button>
    </div>
  )
  
}

export default WhatsAppChat
