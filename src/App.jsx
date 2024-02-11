import { useState } from "react";
import "./App.css";
import Navbar from "./components/Layouts/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import Services from "./components/Services/Services";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Dashboard />}></Route>
            <Route exact path="/services" element={<Services />}></Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
