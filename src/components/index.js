import './index.css';
import { useState, useEffect } from "react";
import {createRoot} from "react-dom/client";
import { BrowserRouter, Switch, Routes, Route, Router  } from "react-router-dom";
import Navbar from "./Navbar.js";
import Home from "./Home.js";
import About from "./About.js";
import Products from "./Products.js";
import ProductDetails from "./ProductDetails.js";
import Cart from "./Cart.js";

function App() {
 
  return (
     TEST
  );
}

createRoot(document.querySelector("#react-root")).render(<App />);