
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
import Actaqua from "./components/home/Actaqua";
import Actautomated from "./components/home/Actautomated";
import Bottom from "./components/home/Bottom";
import Power from "./components/home/Power";
import Feedtray from "./components/home/Feedtray";
import Monitoring from "./components/home/Monitoring";

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
      <Route path="/act-aquaculture" element={<Actaqua />} />
      <Route path="/actaqua" element={<Actaqua />} />
      <Route path="/act-aqua" element={<Actaqua />} />
      <Route path="/act-automated-feeder" element={<Actautomated />} />
      <Route path="/automated-feeder" element={<Actautomated />} />
      <Route path="/automated-feeder-system" element={<Actautomated />} />
      <Route path="/act-automated" element={<Actautomated />} />
      <Route path="/actautomated" element={<Actautomated />} />
      <Route path="/bottom-aeration-system" element={<Bottom />} />
      <Route path="/bottom-aeration" element={<Bottom />} />
      <Route path="/act-bottom-aeration" element={<Bottom />} />
      <Route path="/bottom" element={<Bottom />} />
      <Route path="/act-bottom" element={<Bottom />} />
      <Route path="/power-monitoring-system" element={<Power />} />
      <Route path="/power-monitoring" element={<Power />} />
      <Route path="/energy-monitoring-system" element={<Power />} />
      <Route path="/energy-monitoring" element={<Power />} />
      <Route path="/power" element={<Power />} />
      <Route path="/act-power" element={<Power />} />
      <Route path="/act-energy-monitoring" element={<Power />} />
      <Route path="/feed-tray-system" element={<Feedtray />} />
      <Route path="/feed-tray" element={<Feedtray />} />
      <Route path="/feedtray" element={<Feedtray />} />
      <Route path="/act-feed-tray" element={<Feedtray />} />
      <Route path="/smart-checktray" element={<Feedtray />} />
      <Route path="/checktray" element={<Feedtray />} />
      <Route path="/monitoring-system" element={<Monitoring />} />
      <Route path="/monitoring" element={<Monitoring />} />
      <Route path="/aquaculture-monitoring" element={<Monitoring />} />
      <Route path="/aquaculture-monitoring-system" element={<Monitoring />} />
      <Route path="/water-monitoring-system" element={<Monitoring />} />
      <Route path="/water-monitoring" element={<Monitoring />} />
      <Route path="/water-quality-monitoring" element={<Monitoring />} />
      <Route path="/act-monitoring" element={<Monitoring />} />

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
