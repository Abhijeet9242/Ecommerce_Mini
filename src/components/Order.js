import React from 'react';
import {useNavigate } from 'react-router-dom';

const Order = () => {
  const navigate = useNavigate()
  const goToHOme = () => {
    navigate("/")
  }
  return (
    <div className='order'>
      <div className='orderdiv'>
          <h2>Order Success!!</h2>
          <div className='gohome' onClick={goToHOme}>Home</div>
      </div>

    </div>
  )
}

export default Order