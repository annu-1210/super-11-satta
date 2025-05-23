import React from "react";
import Results from "./Results";
import ProviderDetails from "./common/ProviderDetails";
import AboutSection from "./AboutSection";
import ImportantNews from "./ImportantNews";
import GameList from "./common/GameList";
import ResultChart from "./ResultChart";
import YearlyChart from "./YearlyChart";

function MainContent() {
  return (
    <section className="w-full flex flex-col items-center justify-center bg-transparent pb-4">
      <Results />
      <ProviderDetails providerName="PAWAN Bhai" whtsappNumber={7082450947} />
      <GameList />
      <ProviderDetails providerName="KUSHAL Bhai" whtsappNumber={9253282414} />
      <YearlyChart />
      <ResultChart />
      <AboutSection />
      <ImportantNews />
    </section>
  );
}

export default MainContent;
