import React, { useEffect, useContext } from "react";
import Hero from "../components/HomeComponents/HeroSection/Hero";
import Trusted from "../components/HomeComponents/TrustedSection/Trusted";
import Help from "../components/HomeComponents/HelpSection/Help";
import MostaqelHelp from "../components/HomeComponents/HelpSection/MostaqelHelp";
import Freelancers from "../components/HomeComponents/FreelancersSection/Freelancers";
import Ready from "../components/HomeComponents/ReadySection/Ready";
import Ask from "../components/HomeComponents/AskSection/Ask";

import { useTranslation } from "react-i18next";
function Home() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = "Mostaql Clone | Home";
    AOS.init();
  }, []);

  return (
    <>
      <Hero t={t} />
      <Trusted t={t} />
      <Help t={t} />
      <MostaqelHelp t={t} />
      <Freelancers t={t} />
      <Ready t={t} />
      <Ask t={t} />
    </>
  );
}

export default React.memo(Home);
