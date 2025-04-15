import React from "react";
import Results from "./Results";
import ProviderDetails from "./common/ProviderDetails";
import AboutSection from "./AboutSection";
import ImportantNews from "./ImportantNews";
import GameList from "./GameList";

function MainContent() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-transparent pb-4">
      <Results />
      <ProviderDetails providerName=" Jitu Bhai  KHAIWAL" />
      <GameList />
      <ProviderDetails providerName="  Monu Bhai KHAIWAL" />
      <AboutSection />
      <ImportantNews />
    </section>
  );
}

export default MainContent;
