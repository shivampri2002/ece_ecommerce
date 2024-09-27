import React from 'react';
import Link from 'next/link';

import { AiOutlineShopping } from 'react-icons/ai';

import { Cart } from "./";

const Navbar = () => {
  let totalQuantities = 1;
  let showCart = false;
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">ECE Headphones</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  )
}

export default Navbar;