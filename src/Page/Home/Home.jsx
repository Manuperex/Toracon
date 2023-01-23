import React from 'react'
import Banner from "../../Components/Banner/Banner";
import Description from "../../Components/Description/Description";
import CardsCarousel from "../../Components/CardsCarousel/CardsCarousel";
import Products from "../../Components/Products/Products";
import ButtonList from "../../Components/ButtonList/ButtonList";
import Footer from "../../Components/Footer/Footer";

const Home = ({categories, 
  filterCategory,
  allProducts,
  setAllProducts,
  total,
  setTotal,
  countProducts,
  setCountProducts,
  articles}) => {
  return (
    <div className='Overscroll'>
        
      <Banner />
      <Description />
      <CardsCarousel />
      <ButtonList categories={categories} filterCategory={filterCategory} />
      <Products
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        articles={articles}
      />
      <Footer />
    </div>
  )
}

export default Home