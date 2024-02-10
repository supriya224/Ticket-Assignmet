import { About, PaymentDetails } from "@/components";
import Information from "@/components/core/Info/Information";
import MainInfo from "@/components/core/Info/MainInfo";
import React from "react";
import RightLayout from "../RightLayout/RightLayout";

const LeftLayout = () => {
  return (
    <div>
      <MainInfo />
      {/* <Information /> */}
      <PaymentDetails />
      <About />
    </div>
  );
};

export default LeftLayout;
