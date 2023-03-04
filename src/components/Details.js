import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import { BsPlus, BsDash } from "react-icons/bs";
import Footer from "./Footer";
import Nav from "./Nav";

const Details = () => {
  // const params = useParams()
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductsReducer);

  const [quantity, setQuantity] = useState(1);

  console.log(product);

  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);

  const handle_decQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handle_incQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const addToCart = (product, quantity) => {
    dispatch({ type: "ADD_TO_CART", payload: { product, quantity } });
  };

  return (
    <>
      <Nav />
      <div className="details_cont">
        <div className="left_details">
          <img src={`/images/${product.image}`} alt="details_image" />
        </div>
        <div className="right_details">
          <div className="details_name">{product.name}</div>
          <div className="details_price">
            <span className="details_actual">
              ₹{currencyFormatter.format(product.price, { code: "IND" })}
            </span>

            <span className="details_discount">
              {" "}
              ₹
              {currencyFormatter.format(product.discountPrice, { code: "IND" })}
            </span>
          </div>

          <div className="details_info">
            <div className="details_incdec">
              <span className="dec" onClick={handle_decQuantity}>
                <BsDash />
              </span>
              <span className="quantity">{quantity}</span>
              <span className="inc" onClick={handle_incQuantity}>
                <BsPlus />
              </span>
              <button
                className="addtocart_btn"
                onClick={() => addToCart(product, quantity)}
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className="details_desc">
            <h4>Details</h4>
            {product.desc}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
