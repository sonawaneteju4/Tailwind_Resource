import { useState } from "react";
import "./App.css";
import Navbar from "./components/Layouts/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Services from "./components/Services/Services";
import ContactUs from "./components/ContactUs/ContactUs";
import Product from "./components/Products/Product";
import Gallery from "./components/Gallery/Gallery";
import Login from "./components/Login/Login";
import Layouts from "./Layouts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter basename="smartpro">
        <Routes>
          <Route path="" element={<Layouts />}>
            <Route exact path="" element={<Dashboard />}></Route>
            <Route exact path="/services" element={<Services />}></Route>
            <Route exact path="/contact-us" element={<ContactUs />}></Route>
            <Route exact path="/products" element={<Product />}></Route>
            <Route exact path="/gallery" element={<Gallery />}></Route>
            <Route exact path="/login" element={<Login />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
