import React from 'react'
import './Footer.css'

const Footer = () => {

  const sendProducts = () => {
     return window.location.assign("https://api.whatsapp.com/send?phone=+573173072440&text=Hola%20Mundo")
  };

return (
  <div className='Footer'>
    <button className='btn-send' onClick={sendProducts}>
    </button>
  </div>
  )
}

export default Footer