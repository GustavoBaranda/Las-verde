import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "../src/Components/Pages/Home";
import Products from "../src/Components/Pages/Products";
import About from "../src/Components/Pages/About";
import Contacts from "../src/Components/Pages/Contacts";
import WhatsApp from "./Components/WhatsApp";
import Footer from "./Components/Footer";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/Contacts" element={<Contacts />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <WhatsApp />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
