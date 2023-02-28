import { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<ProductList/>}/>
        <Route path="add" element={<AddProduct/>}/>
        <Route path="*" element={<>404</>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
