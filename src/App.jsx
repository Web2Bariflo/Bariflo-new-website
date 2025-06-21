//all file routing here 

import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import ManagementTeam from "./pages/ManagementTeam";
import IndoorAqua from "./pages/Indoor/IndoorAqua";
import OutdoorAqua from "./pages/outdoor/OutdoorAqua";
import CaseStudies from "./pages/CaseStudies";
import Products from "./pages/Products";
import News from "./pages/News";
import ResetToStart from "./utils/PageTransitionWrapper";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/teamMember" element={<ManagementTeam />} />
      <Route path="/indoorAqua" element={<IndoorAqua />} />
      <Route path="/outdoorAqua" element={<OutdoorAqua />} />
      <Route path="/news" element={<News />} />
      {/* <Route path="/prodcts" element={<Products />} /> */}
      <Route path="/case-studies" element={<CaseStudies />} />
    </Routes>
  );                                      
}

function App() {
  return (
    <BrowserRouter>
    <ResetToStart/>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
