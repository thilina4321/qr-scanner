import Card from "@mui/material/Card";
import React from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = () => {
  const a = { game: 1 };
  const data = JSON.stringify(a);
  return (
    <Card
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "96%",
        margin: "5px auto",
        marginTop: "1rem",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "rgb(0, 183, 255)",
          padding: "0.5rem 5rem",
        }}
      >
        QR Code
      </h1>
      <QRCode value={data} />
    </Card>
  );
};

export default QrCodeGenerator;
