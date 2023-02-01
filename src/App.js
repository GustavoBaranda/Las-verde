import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home";
import ItemList from "./Components/ItemList";
import About from "./Components/Pages/About";
import Contacts from "./Components/Pages/Contacts";
import WhatsApp from "./Components/WhatsApp";
import Footer from "./Components/Footer";
import "./styles/styles.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/products" element={<ItemList />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contacts" element={<Contacts />} />
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
