import './App.css'
import React from 'react'
import { useState } from 'react';
import Header from "./Components/Header/Header"
import Banner from "./Components/Banner/Banner"
import Description from "./Components/Description/Description"
import CardsCarousel from './Components/CardsCarousel/CardsCarousel'
import Products from './Components/Products/Products'
import ButtonList from './Components/ButtonList/ButtonList'
import {data} from './Data/data';


function App() {
    const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

    const allCategories = [
		'All',...new Set(data.map(article => article.category)),
	];

	const [categories, setCategories] = useState(allCategories);
	const [articles, setArticles] = useState(data);

	const filterCategory = (category) => {
		if (category === 'All'){
			setArticles(data)
			return
		}

		const filteredData = data.filter(article => article.category === category);
		setArticles(filteredData)
	}

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
            <ButtonList 
            categories={categories} 
            filterCategory={filterCategory}/>
            <Products
            allProducts={allProducts}
            setAllProducts={setAllProducts}
            total={total}
            setTotal={setTotal}
            countProducts={countProducts}
            setCountProducts={setCountProducts}
            articles={articles}
            />
        </div>
    )
   
}

export default App
