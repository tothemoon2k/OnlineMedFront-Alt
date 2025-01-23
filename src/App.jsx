import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import GeneralA from "./pages/landingPages/GeneralA";
import GeneralB from "./pages/landingPages/GeneralB";
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
import Refund from "./pages/legal/Refund";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<GeneralA />} />
        <Route path="/a" element={<GeneralA />} />
        <Route path="/b" element={<GeneralB />} />
        <Route path="/form/w" element={<WorkForm />} />
        <Route path="/form/s" element={<SchoolForm />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/refund" element={<Refund />} />
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