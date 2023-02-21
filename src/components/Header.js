import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingBag
          onClick={() => {
            setCartOpen((cartOpen = !cartOpen));
          }}
          className={`shop-cart-button ${cartOpen && "active"}`}
          size={"1.1em"}
        />
        {cartOpen && <div className="shop-cart"></div>}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
