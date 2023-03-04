import React, { useEffect } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  let mygif =
    "https://1.bp.blogspot.com/-TUnIV6lCpUI/Ug5AjWt-L5I/AAAAAAAABRY/X5083DNXw28/s1600/LoadingWait.gif";

  useEffect(() => {
    setTimeout(() => {
      navigate("/order");
    }, 3000);
  }, []);

  return (
    <>
      <div className="mainpaymentdiv">
        <div className="paymentgifdiv">
          <img src={mygif} alt="" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
