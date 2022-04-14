import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavBar, SlideBar, Footer } from "./components";
import {
  About,
  AuthWrapper,
  Cart,
  Checkout,
  Error,
  Home,
  PrivateRoute,
  Products,
  SingleProduct,
} from "./pages";

function App() {
  return (
    <BrowserRouter>
      <AuthWrapper>
        <NavBar />
        <SlideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route
            path="/checkout"
            element={
              <PrivateRoute>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </AuthWrapper>
    </BrowserRouter>
  );
}

export default App;
