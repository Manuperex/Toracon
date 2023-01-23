import "./Header.css";
import React from "react";
import LogoToracon from "../../assets/Header/logoToracon.png";
import Cart from "../../assets/Header/carts.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
}) => {
  const [active, setActive] = useState(false);

  const onDeleteProduct = (product) => {
    const results = allProducts.filter((item) => item.id !== product.id);

    setTotal(total - product.price * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };
  const sendProducts = () => {
    let productsForWsp = allProducts.map(
      (producto) =>
        `- ${producto.quantity} - ${producto.nameProduct} $${producto.price} c/u`
    );
    const productsSpace = productsForWsp.join("\n");

    return window.location.assign(
      "https://api.whatsapp.com/send?phone=+573508994476&text=Me%20interesan%20los%20siguientes%20productos" +
        " " +
        productsSpace
    );
  };

  return (
    <div className="Header">
      <div className="Header-contents">
        <div className="img-logo-Toracon-simple">
          <img src={LogoToracon} alt="LogoToracon" />
        </div>
        <div className="Header-Nav">
          <NavLink to="/">
            <h1>home</h1>
          </NavLink>
          <NavLink to="/Contact">
            <h1>contacto</h1>
          </NavLink>
          <div className="container-icon">
            <div
              className="container-cart-icon"
              onClick={() => setActive(!active)}
            >
              <div className="img-cart">
                <img src={Cart} alt="LogoToracon" />
              </div>
              <div className="count-products">
                <span id="contador-productos">{countProducts}</span>
              </div>
            </div>

            <div
              className={`container-cart-products ${
                active ? "" : "hidden-cart"
              }`}
            >
              {allProducts?.length ? (
                <>
                  <div className="row-product">
                    {allProducts.map((product) => (
                      <div className="cart-product" key={product.id}>
                        <div className="info-cart-product">
                          <span className="cantidad-producto-carrito">
                            {product.quantity}
                          </span>
                          <p className="titulo-producto-carrito">
                            {product.nameProduct}
                          </p>
                          <span className="precio-producto-carrito">
                            ${product.price}
                          </span>
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="icon-close"
                          onClick={() => onDeleteProduct(product)}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    ))}
                  </div>

                  <div className="cart-total">
                    <h3>Total:</h3>
                    <span className="total-pagar">${total}</span>
                  </div>
                  <div className="row-product-btn-end">
                    <button className="btn-clear-all" onClick={onCleanCart}>
                      Vaciar Carrito
                    </button>
                    <button className="btn-clear-all" onClick={sendProducts}>
                      Enviar Whatsapp
                    </button>
                  </div>
                </>
              ) : (
                <p className="cart-empty">El carrito está vacío</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
