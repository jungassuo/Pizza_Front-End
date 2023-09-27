import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import Home from './pages/Home'
import Orders from './pages/Orders'

import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Product from "./pages/Product"

function App() {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/orders" element={<Orders />}/>
          <Route path="/product" element={<Product />}/>
        </Routes>
        <Sidebar />
        <Footer />
      </Router>  
    </div>
  );
}

export default App;
