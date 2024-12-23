import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import General from "./pages/landingPages/General";
import Work from "./pages/landingPages/Work";
import School from "./pages/landingPages/School";
import OrderConfirmation from "./pages/OrderConfirmation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<General />} />
        <Route path="/w" element={<Work />} />
        <Route path="/s" element={<School />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
      <Analytics />
    </Router>
  );
};

export default App;