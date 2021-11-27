import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <div>
      <Router>
        <CartProvider>
          {cartIsShown && <Cart onClose={hideCartHandler} />}
          <Navbar onShowCart={showCartHandler} />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </CartProvider>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
