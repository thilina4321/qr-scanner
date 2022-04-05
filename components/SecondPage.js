import React from "react";
import Header from "./Header";
import QrCodeGenerator from "./QrCode";
import SampleBill from "./SampleBill";

const SecondPage = () => {
  return (
    <section>
      <Header />
      <QrCodeGenerator />
      <SampleBill />
    </section>
  );
};

export default SecondPage;
