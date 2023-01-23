import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import {BrowserRouter, Route, Routes, } from "react-router-dom"
import Home from './Page/Home/Home'
import Header from "./Components/Header/Header";
import NotFound from "./Page/NotFound/NotFound"
import Contact from "./Page/Contact/Contact"
import { data } from "./Data/data";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);

  const allCategories = [
    "All",
    ...new Set(data.map((article) => article.category)),
  ];

  const [categories, setCategories] = useState(allCategories);
  const [articles, setArticles] = useState(data);

  const filterCategory = (category) => {
    if (category === "All") {
      setArticles(data);
      return;
    }

    const filteredData = data.filter(
      (article) => article.category === category
    );
    setArticles(filteredData);
  };
  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
    const totalLS = JSON.parse(localStorage.getItem("total")) ?? 0;
    const countProductsLS = JSON.parse(localStorage.getItem("countProducts")) ?? 0;
    setAllProducts(cartLS);
    setTotal(totalLS < 0 ? 0 : totalLS)
    setCountProducts(countProductsLS < 0 ? 0 : countProductsLS)
  }, []);


  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(allProducts));
    localStorage.setItem("total", JSON.stringify(total));
    localStorage.setItem("countProducts", JSON.stringify(countProducts));
  }, [allProducts]);
  return (
    <BrowserRouter>
    <Header
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        setTotal={setTotal}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
      />
    <Routes>
      <Route path="/" element={<Home
      categories={categories} 
      filterCategory={filterCategory}
      allProducts={allProducts}
      setAllProducts={setAllProducts}
      total={total}
      setTotal={setTotal}
      countProducts={countProducts}
      setCountProducts={setCountProducts}
      articles={articles}/>}/>

      <Route path="/Contact" element={<Contact/>}/>

      <Route path="*" element={<NotFound/>}/>
      
    </Routes>
      
    </BrowserRouter>
  );
}

export default App;
