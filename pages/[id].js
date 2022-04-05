import Head from "next/head";
import React from "react";
import SecondPage from "../components/SecondPage";

const BillResult = () => {
  return (
    <div>
      <Head>
        <title> {`Bill & QR Code`} </title>
      </Head>
      <SecondPage />
    </div>
  );
};

export default BillResult;
