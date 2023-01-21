import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./Components/NavBar/Index";
import Home from "./Components/Pages/Home/Index";
import Products from "./Components/Pages/Products/Index";
import About from "./Components/Pages/About/Index";
import Contacts from "./Components/Pages/Contacts/Index";
import WhatsApp from "./Components/WhatsApp/Index";
import Footer from "./Components/Footer/Index";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/products" element={ <Products /> } />
          <Route exact path="/about" element= {<About /> } />
          <Route exact path="/Contacts" element={ <Contacts /> } />
          <Route path="/" element={ <Home /> } />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
        <WhatsApp />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
