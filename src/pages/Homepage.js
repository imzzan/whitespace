import React from "react";
import {AppSection, ArticleData, Coztomise, HeroSection, Priceing, Sponsor, Testomoni, Work, WorkManagement} from "../components";

const Homepage = () => {
  return (
    <>
        <HeroSection/>
        <WorkManagement/>
        <Coztomise/>
        <Priceing/>
        <Work/>
        <ArticleData/>
        <Sponsor/>
        <AppSection/>
        <Testomoni/>
    </>
  );
};

export default Homepage;
