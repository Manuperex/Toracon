import React from 'react'
import './Description.css'

const Description = () => {
  return (
    <div className='Description'>
        <div className='Description-block'>
            <p>
                Somos un evento con temática Geek, abarcamos un público objetivo adolescente y mayor de edad, en el cuál reflejaremos con Videojuegos, Anime, Cómics, Películas, Manga, Kpop y mucho más.
            </p>
            <p>
                La Toracon capítulo 2 se llevará a cabo los días 19 y 20  de Agosto del año 2023
            </p>
            <button className='Description-btn'>
                <a className='Description-btn-a' href="#">
                    <h2>
                        Contacto
                    </h2>
                </a>
            </button>
        </div>
    </div>
  )
}

export default Description