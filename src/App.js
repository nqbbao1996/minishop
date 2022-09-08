import { useContext } from "react";
import { ThemeContext } from "./ThemeContex/ThemeContex";
import "./App.css";
import MainContent from "./Components/Body/MainContent";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import ProductDetail from "./Components/Body/Container/ProductDetail";
import MainContentWithTopView from "./Components/Body/MainContentWithTopView";
import FormSignUp from "./Components/Form/FormSignUp/FormSignUp";
import FormSignIn from "./Components/Form/FormSignIn/FormSignIn";
import Cart from "./Components/Cart/Cart";
import { CartProvider } from "react-use-cart";

function App() {
  const themeContext = useContext(ThemeContext);

  return (
    <CartProvider>
      <div className={`App ${themeContext.theme}`}>
        <Router>
          <Header />
          <div className="Body">
            <Routes>
              <Route path="/" element={<MainContentWithTopView />} />
              <Route
                path="/products/category/:categoryName"
                element={<MainContent />}
              />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/signup" element={<FormSignUp />} />
              <Route path="/signin" element={<FormSignIn />} />
              <Route path="/carts" element={<Cart />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </CartProvider>
  );
}

export default App;
