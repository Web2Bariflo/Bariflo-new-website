
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NewLandingPage from "./pages/NewLandingPage";
import ContactUs from "./pages/ContactUs";
import ManagementTeam from "./pages/ManagementTeam";
import IndoorAqua from "./pages/Indoor/IndoorAqua";
import OutdoorAqua from "./pages/outdoor/OutdoorAqua";
import CaseStudies from "./pages/CaseStudies";
import News from "./pages/News";
import ResetToStart from "./utils/PageTransitionWrapper";
import SenseAquaculturePage from "./pages/SenseAquaculturePage";

import Cognition from "./components/home/cognition";
import Act from "./components/home/Act";
import DafTank from "./components/home/DafTank";
import Sediment from "./components/home/Sediment";
import Flocculant from "./components/home/Flocculant";
import Coagulant from "./components/home/coagulant";

import ScrollCursorIndicator from "./components/common/ScrollCursorIndicator";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<NewLandingPage />} />

      <Route
        path="/sense-aquaculture"
        element={<SenseAquaculturePage />}
      />

      <Route path="/cognition" element={<Cognition />} />
      <Route path="/cognition-aquaculture" element={<Cognition />} />

      <Route path="/act" element={<Act />} />
      <Route path="/daf-tank" element={<DafTank />} />
      <Route path="/coagulant" element={<Coagulant />} />
      <Route path="/sediment" element={<Sediment />} />
      <Route path="/flocculant" element={<Flocculant />} />

      <Route path="/legacy-home" element={<Home />} />
      <Route path="/contactUs" element={<ContactUs />} />
      <Route path="/teamMember" element={<ManagementTeam />} />
      <Route path="/indoorAqua" element={<IndoorAqua />} />
      <Route path="/outdoorAqua" element={<OutdoorAqua />} />
      <Route path="/news" element={<News />} />
      <Route path="/case-studies" element={<CaseStudies />} />

      <Route
        path="*"
        element={
          <div
            style={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              textAlign: "center",
            }}
          >
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <a href="/">Go to Home</a>
          </div>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ResetToStart />
      <ScrollCursorIndicator />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
