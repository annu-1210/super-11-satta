import React from "react";
import Header from "./components/common/Header";
import Hero from "./components/common/Hero";
import MainContent from "./components/MainContent";
import ChartContent from "./components/ChartContent";
import Footer from "./components/common/Footer";
import YearRecords from "./components/YearRecords";
import { Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

function App() {
  return (
    <div className="max-w-[1920px] px-2 sm:px-6 xl:px-10 mx-auto flex flex-col items-center justify-center font-montserrat !bg-bodyBg">
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/chart" element={<ChartContent />} />
        <Route path="/year-records" element={<YearRecords />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
