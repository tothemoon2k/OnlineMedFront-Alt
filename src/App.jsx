import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import General from "./pages/landingPages/General";
import Work from "./pages/landingPages/Work";
import School from "./pages/landingPages/School";
import WorkForm from "./pages/form/Work";
import SchoolForm from "./pages/form/School";
import OrderConfirmation from "./pages/OrderConfirmation";
import Terms from "./pages/legal/Terms";
import Privacy from "./pages/legal/Privacy";
import HipaaConsent from "./pages/legal/HipaaConsent";
import TelehealthConsent from "./pages/legal/TelehealthConsent";
import Heyflow from "./pages/Heyflow";
import VerificationRequest from "./pages/VerificationRequest";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="/w" element={<Work />} />
        <Route path="/s" element={<School />} />
        <Route path="/form/w" element={<WorkForm />} />
        <Route path="/form/s" element={<SchoolForm />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/hipaa-consent" element={<HipaaConsent />} />
        <Route path="/telehealth-consent" element={<TelehealthConsent />} />
        <Route path="/heyflow" element={<Heyflow />} />
        <Route path="/verification-request" element={<VerificationRequest />} />
      </Routes>
      <Analytics />
    </Router>
  );
};

export default App;