import React from "react";
import Header from "./components/common/Header";
import Hero from "./components/common/Hero";
import MainContent from "./components/MainContent";
import ChartContent from "./components/ChartContent";
import Footer from "./components/common/Footer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    // <BrowserRouter>
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center font-roboto">
        <Header />
        <Hero />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/chart" element={<ChartContent />} />
          {/* <Route path="/play" element={<RedirectToWhatsApp />} /> */}
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
