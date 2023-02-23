import React from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useState } from "react";
import Order from "./Order";

const showOrders = (props) => {
  return (
    <>
      {props.orders.map((el) => (
        <Order key={el.id} item={el} />
      ))}
    </>
  );
};

const showNothing = () => {
  return (
    <div className="empty">
      <h2>Добавленых товаров нет!</h2>
    </div>
  );
};

export default function Header(props) {
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
        {cartOpen && (
          <div className="shop-cart">
            {props.orders.length > 0 ? showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  );
}
