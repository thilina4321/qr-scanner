import React from "react";
import FirstPage from "../components/FirstPage";
import Head from "next/head";

const Home = () => {
  return (
    <div>
      <Head>
        <title> {`Sample Bill & QR Generator`} </title>
      </Head>
      <FirstPage />
    </div>
  );
};

export default Home;
