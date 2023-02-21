import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render() {
    return (
      <div className="wrapper">
        <Header />
        <Items items={this.state.items} />
        <Footer />
      </div>
    );
  }
}

export default App;
