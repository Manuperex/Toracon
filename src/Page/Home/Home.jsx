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
  // const [allProducts, setAllProducts] = useState([]);
  // const [total, setTotal] = useState(0);
  // const [countProducts, setCountProducts] = useState(0);

  // const allCategories = [
  //   "All",
  //   ...new Set(data.map((article) => article.category)),
  // ];

  // const [categories, setCategories] = useState(allCategories);
  // const [articles, setArticles] = useState(data);

  // const filterCategory = (category) => {
  //   if (category === "All") {
  //     setArticles(data);
  //     return;
  //   }

  //   const filteredData = data.filter(
  //     (article) => article.category === category
  //   );
  //   setArticles(filteredData);
  // };
  // useEffect(() => {
  //   const cartLS = JSON.parse(localStorage.getItem("carrito")) ?? [];
  //   const totalLS = JSON.parse(localStorage.getItem("total")) ?? 0;
  //   const countProductsLS = JSON.parse(localStorage.getItem("countProducts")) ?? 0;
  //   setAllProducts(cartLS);
  //   setTotal(totalLS < 0 ? 0 : totalLS)
  //   setCountProducts(countProductsLS < 0 ? 0 : countProductsLS)
  //   console.log('totalLS', totalLS)
  //   console.log('countProductsLS', countProductsLS)
  //   console.log("cartLS", cartLS);
  // }, []);

  // console.log("allProducts", allProducts);

  // useEffect(() => {
  //   localStorage.setItem("carrito", JSON.stringify(allProducts));
  //   localStorage.setItem("total", JSON.stringify(total));
  //   localStorage.setItem("countProducts", JSON.stringify(countProducts));
  // }, [allProducts]);

  return (
    <div>
        
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