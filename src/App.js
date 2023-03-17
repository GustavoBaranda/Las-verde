import { HashRouter , Routes, Navigate, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import WhatsApp from "./Components/WhatsApp";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Products from "./Components/Pages/Products";
import Contacts from "./Components/Pages/Contacts";
import SuccessfulMessage from "./Components/Pages/Contacts/SuccessfulMessage";
import "./styles/main.scss";

function App() {
  return (
    <>
      <HashRouter>
        <ScrollToTop />
        <NavBar />
        <Routes>
          <Route exact path="/products" element={ <Products /> } />
          <Route exact path="/about" element={ <About /> } />
          <Route exact path="/contacts" element={ <Contacts /> } />
          <Route exact path="/contacts/successfulmessage" element={ <SuccessfulMessage /> } />
          <Route path="/" element={ <Home /> } />
          <Route path="*" element={ <Navigate to="/" /> } />
        </Routes>
        <WhatsApp />
        <Footer />
      </HashRouter>
    </>
  );
}

export default App;