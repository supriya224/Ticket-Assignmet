import React from "react";
import { Footer, Header } from "../..";
import LeftLayout from "../leftLayout/LeftLayout";
// import { MainDetails } from '../core/Details'
// import Footer from '../shared/Footer/Footer'

export const MainLayout = () => {
  return (
    <div className="">
      <Header />
      <LeftLayout />
      <Footer />
    </div>
  );
};
