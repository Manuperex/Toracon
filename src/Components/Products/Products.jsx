import React from "react";
import "./Products.css";

const Products = ({
  allProducts,
  setAllProducts,
  countProducts,
  setCountProducts,
  total,
  setTotal,
  articles,
}) => {
  const onAddProduct = (product) => {
    if (allProducts.find((item) => item.id === product.id)) {
      const products = allProducts.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      return setAllProducts([...products]);
    }

    setTotal(total + product.price * product.quantity);
    setCountProducts(countProducts + product.quantity);
    setAllProducts([...allProducts, product]);
  };
  return (
    <div className="container-items">
      {articles.map((product) => (
        <div className="item" key={product.id}>
          <figure>
            <img src={product.img} alt={product.nameProduct} />
          </figure>
          <div className="info-product">
            <h2>{product.nameProduct}</h2>
            <p className="price">${product.price}</p>
            <button onClick={() => onAddProduct(product)}>
              <h2>Añadir al carrito</h2>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
