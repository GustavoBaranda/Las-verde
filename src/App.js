import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../src/Components/Pages/Home/Home';
import Products from '../src/Components/Pages/Products/Products';
import About from '../src/Components/Pages/About/About';
import Contacts from '../src/Components/Pages/Contacts/Contacts';
import WhatsApp from './Components/WhatsApp/WhatsApp';
import Footer from './Components/Footer/Footer';


function App() {
  return (
   <>
   <BrowserRouter>
    <NavBar />
    <Routes>  
      <Route exact path="/products" element={ <Products /> } /> 
      <Route exact path="/about" element={ <About /> } /> 
      <Route exact path="/Contacts" element={ <Contacts /> } /> 
      <Route path="/" element={ <Home /> } />  
      <Route path="*" element={ <Navigate to="/" />}  />
    </Routes>  
    <WhatsApp />
    <Footer />
   </BrowserRouter>
   </>
  );
}

export default App;
