import "./index.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";


function AppWrapper() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <Navbar transparent={isHome} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <ContactSection/>
      <Footer />
    </>
  );
}

function App() {
  return (
      <BrowserRouter>        
        <AppWrapper />
      </BrowserRouter>
  );
}

export default App;
