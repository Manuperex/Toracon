import './App.css'
import React from 'react'
import Header from "./Components/Header/Header"
import Banner from "./Components/Banner/Banner"
import Description from "./Components/Description/Description"
import CardsCarousel from './Components/CardsCarousel/CardsCarousel'

function App() {
    return (
         <div>
            <Header/>
            <Banner/>
            <Description/>
            <CardsCarousel/>

        </div>
    )
   
}

export default App
