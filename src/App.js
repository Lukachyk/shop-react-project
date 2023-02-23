import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Kitchen",
          img: "room.jpg",
          desc: "lreme fdgg good proff of the name or setting",
          category: "tables",
          price: "149.00",
        },
        {
          id: 2,
          title: "Sofa",
          img: "sofa.jpg",
          desc: "lreme fdgg good proff of the name or setting",
          category: "tables",
          price: "129.00",
        },
        {
          id: 3,
          title: "Room",
          img: "room.jpg",
          desc: "lreme fdgg good proff of the name or setting",
          category: "tables",
          price: "180.00",
        },
      ],
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }
  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      this.setState({ orders: [...this.state.orders, item] });
    }
  }
}

export default App;
