import React, { Component } from 'react';
import { BrowserRouter, Switch, Routes, Route, Router  } from "react-router-dom";
//import { Route } from 'react-router';
//import { Layout } from './components/Layout';
//import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
//import { Counter } from './components/Counter';
import Navbar from "./components/Navbar.js";
import Cart from "./components/Cart.js";

import About from "./components/About.js";
import Products from "./components/Products.js";
import ProductDetails from "./components/ProductDetails.js";


import  Header  from './components/Header.js';
import { NameInfo } from './components/NameInfo';
import { AboutInfo } from './components/AboutInfo';
import { Work } from './components/Work';
import { Contact } from './components/Contact';
import {Footer } from './components/Footer';
import Home from "./components/Home.js";
import Portfolio from "./components/Portfolio.js";
import Store from "./components/Store.js";

//import './custom.css';
import './style.css';
import './index.css';

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = { cart: [] };
    }

    handleProductDelete(id) {
        const updatedCart = this.state.cart.filter((product) => product.id !== id);
        this.state.setCart(updatedCart);
    }

    handleProductAdd(newProduct) {
        // check if item exists
        const existingProduct = this.state.cart.find(
            (product) => product.id === newProduct.id
        );
        if (existingProduct) {
            // increase quantity
            const updatedCart = this.state.cart.map((product) => {
                if (product.id === newProduct.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1,
                    };
                }
                return product;
            });
            this.state.setCart(updatedCart);
        } else {
            // product is new to the cart
            this.state.setCart([
                ...this.state.cart,
                {
                    ...newProduct,
                    quantity: 1,
                },
            ]);
        }
    }
    static displayName = App.name;
  

    render() {

      return (

          <BrowserRouter>
              <Header />
              <Routes>
                  <Route exact path="/" element={<Portfolio />} />
                  <Route path="/store" element={<Store />} />
                 
                  {/* <Route exact path="/products" element={<Products/>} /> */}
                 <Route path='/about' element={<About cart={this.state.cart}/>} />
              </Routes>
          </BrowserRouter>
      //     <BrowserRouter>
      //     <div className="container">
      //   <Routes>
         
       
      //         <Route exact path="/" element={<Home />} />
      //         <Route exact path="/about" element={<About />} />
       
      //         <Route path="/products/:id/*" element={ <ProductDetails />} /> 
           
            
          
      //   </Routes>
      //   </div>
      // </BrowserRouter>
    );
  }
}
