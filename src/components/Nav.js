import React from "react";
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { useSelector } from "react-redux";

const Nav = () => {
  const { totalQuantites } = useSelector((state) => state.CartReducer);
  // console.log(totalQuantites)

  return (
    <div className="nav">
      <div className="nav_container">
        <div className="nav_left">
          <Link to="/">
            <img src="/images/logo1.jpg" alt="logo" />
          </Link>
        </div>
        <div className="nav_right">
          <Link to="/cart">
            <div className="basket">
              <BsFillBagFill className="cart-icon" />
              <span>{totalQuantites}</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
