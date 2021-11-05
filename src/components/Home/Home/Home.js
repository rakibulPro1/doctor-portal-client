import React from "react";
import Services from "../Services/Services";
import AppoinmentBanner from "../AppoinmentBanner/AppoinmentBanner";
import Banner from "../Banner/Banner";
import NabigationBar from "../../sharedComponents/NavigationBar/NabigationBar";

const Home = () => {
  // color: #0AE299
  return (
    <div>
      <NabigationBar></NabigationBar>
      <Banner></Banner>
      <Services></Services>
      <AppoinmentBanner></AppoinmentBanner>
    </div>
  );
};

export default Home;
