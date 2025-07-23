import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import BoardOfTrustees from "./pages/BoardOfTrustees";
import SalaryLoan from "./pages/SalaryLoan";
import PensionLoan from "./pages/PensionLoan";
import CapitalContribution from "./pages/CapitalContribution";
import OurLocation from "./pages/OurLocation";
import ContactMabslai from "./pages/ContactMabslai";
import ManagementTeam from "./pages/ManagementTeam";

function App() {
  return (
    <div>
      {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="SalaryLoan" element={<SalaryLoan />} />
          <Route path="PensionLoan" element={<PensionLoan />} />
          <Route path="CapitalContribution" element={<CapitalContribution />} />
          <Route path="OurLocation" element={<OurLocation />} />
          <Route path="ContactMabslai" element={<ContactMabslai />} />
          <Route path="/BoardOfTrustees" element={<BoardOfTrustees />} />
          <Route path="ManagementTeam" element={<ManagementTeam />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
