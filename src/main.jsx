import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layput from "./Layput";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./component/Pages/Home";
import Header from "./component/header/header";
import Footer from "./component/Footer/Footer";
import AbouteUs from "./component/Pages/AbouteUs";
import ContactUs from "./component/Pages/ContactUs";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<AbouteUs />} path="/AbouteUs" />
        <Route element={<ContactUs />} path="/ContactUs" />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
