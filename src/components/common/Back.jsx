import React from "react"

const Back = ({ name, title, cover }) => {
  return (
    <>
      <div className="back">
        <div className="container">
          <h2>{name}</h2>
          <h1>{title}</h1>
        </div>
        <img
          src={cover}
          alt=""
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
    </>
  )
}

export default Back
