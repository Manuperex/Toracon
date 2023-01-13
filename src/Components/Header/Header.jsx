import './Header.css'
import React from 'react'
import LogoToracon from '../../assets/Header/logoToracon.png'
import Cart from '../../assets/Header/carts.png'

const Header = () => {
  return (
    <div className='Header'>
        <div className='Header-contents'>
            <div className='img-logo-Toracon-simple'>
                <img src={LogoToracon} alt="LogoToracon" />
            </div>
            <div>
                <div>
                    <h1>
                        home
                    </h1>
                </div>
                <div>
                    <h1>
                        contacto
                    </h1>
                </div>
                <div className='img-cart'>
                    <img src={Cart} alt="LogoToracon" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header