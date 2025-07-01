const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className="heading">
        <h1 style={{ color: '#ee7e01' }}>{title}</h1>
        <p style={{ color: '#ee7e01' }}>{subtitle}</p>
      </div>
    </>
  )
}

export default Heading
