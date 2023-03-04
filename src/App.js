import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import Products from "./Components/Pages/Products";
import About from "./Components/Pages/About";
import Contacts from "./Components/Pages/Contacts";
import WhatsApp from "./Components/WhatsApp";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import "./styles/main.scss";
import SuccessfulMessage from "./Components/Pages/Contacts/SuccessfulMessage";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contacts" element={<Contacts />} />
          <Route exact path="/contacts/successfulmessage" element={<SuccessfulMessage />} />
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
