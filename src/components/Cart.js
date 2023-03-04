import React from "react";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import { BsPlus, BsDash, BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

const Cart = () => {
  const { cartproducts } = useSelector((state) => state.CartReducer);
  const { totalQuantites, totalPrice } = useSelector(
    (state) => state.CartReducer
  );
  // console.log(cartproducts)

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleInc = (id) => {
    dispatch({ type: "INC", payload: id });
  };

  const handleDec = (id) => {
    dispatch({ type: "DEC", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const handlePayment = () => {
    navigate("/payment");
  };

  return (
    <>
      <Nav />
      <div className="cart">
        <div className="cart_maincont">
          <h3 className="carthead">Your Cart</h3>
          {cartproducts.length > 0 ? (
            <>
              <div className="cart_cont">
                <div className="cart_left">
                  <div className="cart_heading">
                    <div className="col-2">Picture</div>
                    <div className="col-2">Name</div>
                    <div className="col-2 moprice">Price</div>
                    <div className="col-2">Inc/Dec</div>
                    <div className="col-2">Total Price</div>
                    <div className="col-2">Remove</div>
                  </div>
                  {cartproducts.map((cartproduct) => (
                    <div className="cart_product_heading" key={cartproduct.id}>
                      <div className="col-2">
                        <div className="cart_image">
                          <img src={`/images/${cartproduct.image}`} alt="" />
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="cart_name">{cartproduct.name}</div>
                      </div>
                      <div className="col-2">
                        <div className="cart_price">
                          ₹
                          {currencyFormatter.format(cartproduct.discountPrice, {
                            code: "IND",
                          })}
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="details_info">
                          <div className="details_incdec">
                            <span
                              className="dec"
                              onClick={() => handleDec(cartproduct.id)}
                            >
                              <BsDash />
                            </span>
                            <span className="quantity">
                              {cartproduct.quantity}
                            </span>
                            <span
                              className="inc"
                              onClick={() => handleInc(cartproduct.id)}
                            >
                              <BsPlus />
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="cart_total">
                          ₹
                          {currencyFormatter.format(
                            cartproduct.discountPrice * cartproduct.quantity,
                            {
                              code: "IND",
                            }
                          )}
                        </div>
                      </div>
                      <div className="col-2">
                        <div
                          className="remove"
                          onClick={() => removeItem(cartproduct.id)}
                        >
                          <BsFillTrashFill />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="cart_right">
                  <div className="summary_heading">Summary</div>
                  <div className="summary_details">
                    <div className="row">
                      <div className="titem">Total Items</div>
                      <div className="titem">{totalQuantites}</div>
                    </div>
                    <div className="row">
                      <div className="tprice">Total Price</div>
                      <div className="titem">
                        {" "}
                        ₹
                        {currencyFormatter.format(totalPrice, {
                          code: "IND",
                        })}
                      </div>
                    </div>
                    <div className="btn">
                      <button
                        type="button"
                        className="checkout"
                        onClick={handlePayment}
                      >
                        Checkout
                      </button>
                    </div>
                    <div>.</div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <h2 className="cartempty">Your Cart is Empty!!</h2>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
