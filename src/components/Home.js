import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Nav from "./Nav";

const Home = () => {
  const { products } = useSelector((state) => state.ProductsReducer);
  // console.log(products)

  return (
    <div>
      <Nav />
      <Header />
      <div className="container">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <Link to={`/details/${product.id}`} className="link">
              <div className="product_img">
                <img src={`/images/${product.image}`} alt="image name" />
              </div>
              <div className="product_name">{product.name}</div>
              <div className="pricing">
                <div className="product_price">
                  <span className="actual_price">
                    ₹{currencyFormatter.format(product.price, { code: "IND" })}
                  </span>
                  <span className="discount">{product.discount}%</span>
                </div>
                <div className="product_discount_price">
                  ₹
                  {currencyFormatter.format(product.discountPrice, {
                    code: "IND",
                  })}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
