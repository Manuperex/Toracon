import './App.css'
import React from 'react'
import { useState } from 'react';
import Header from "./Components/Header/Header"
import Banner from "./Components/Banner/Banner"
import Description from "./Components/Description/Description"
import CardsCarousel from './Components/CardsCarousel/CardsCarousel'
import Products from './Components/Products/Products'
import Footer from './Components/Footer/Footer';

function App() {
    const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
    return (
         <div>
            <Header
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            />
            <Banner/>
            <Description/>
            <CardsCarousel/>
            <Products
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            />
            <Footer/>
        </div>
    )
   
}

export default App
