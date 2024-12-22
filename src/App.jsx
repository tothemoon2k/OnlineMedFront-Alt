import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Landing from "./pages/Landing";
import OrderConfirmation from "./pages/OrderConfirmation";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
      </Routes>
      <Analytics />
    </Router>
  );
};

export default App;