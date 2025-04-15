import React from "react";
import Header from "./components/common/Header";
import Hero from "./components/common/Hero";
import MainContent from "./components/MainContent";
import Footer from "./components/common/Footer";

function App() {
  return (
    <div className="max-w-7xl mx-auto flex flex-col items-center justify-center font-roboto">
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
