import React from "react";
import Results from "./Results";
import ProviderDetails from "./common/ProviderDetails";
import AboutSection from "./AboutSection";
import ImportantNews from "./ImportantNews";
import GameList from "./GameList";
import ResultChart from "./ResultChart";
import YearlyChart from "./YearlyChart";

function MainContent() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-transparent pb-4">
      <Results />
      <ProviderDetails providerName=" Jitu Bhai  KHAIWAL" />
      <GameList sheetName="Game_List1" />
      <GameList sheetName="Game_List2" />
      <YearlyChart />
      <ProviderDetails providerName="  Monu Bhai KHAIWAL" />
      <ResultChart />
      <AboutSection />
      <ImportantNews />
    </section>
  );
}

export default MainContent;
