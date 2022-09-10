import "./App.css";
import { ThemeContext } from "./ThemeContex/ThemeContex";
import MainContent from "./Components/Body/MainContent";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";
import ProductDetail from "./Components/Body/Container/ProductDetail";
import MainContentWithTopView from "./Components/Body/MainContentWithTopView";
import FormSignUp from "./Components/Form/FormSignUp/FormSignUp";
import FormSignIn from "./Components/Form/FormSignIn/FormSignIn";
import Cart from "./Components/Cart/Cart";

import { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "react-use-cart";

function App() {
  const themeContext = useContext(ThemeContext);
  const [showUp, setShowUp] = useState(false);
  const [showIn, setShowIn] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <div className={`App ${themeContext.theme}`}>
        <Router>
          <Header
            setShowUp={setShowUp}
            setShowIn={setShowIn}
            setShowCart={setShowCart}
          />
          {showCart ? <Cart setShowCart={setShowCart} /> : ""}
          {showUp ? <FormSignUp setShowUp={setShowUp} /> : ""}
          {showIn ? <FormSignIn setShowIn={setShowIn} /> : ""}
          <div className="Body">
            <Routes>
              <Route path="/" element={<MainContentWithTopView />} />
              <Route
                path="/products/category/:categoryName"
                element={<MainContent />}
              />
              <Route path="/products/:id" element={<ProductDetail />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
