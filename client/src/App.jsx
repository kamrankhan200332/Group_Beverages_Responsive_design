import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Products from "./pages/Products/Products";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Distributors from "./pages/Distributors/Distributors";
import Services from "./pages/Services/Services";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/Services" exact element={<Services />} />
          <Route path="/products" exact element={<Products />} />
          <Route path="/distributors" exact element={<Distributors />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
