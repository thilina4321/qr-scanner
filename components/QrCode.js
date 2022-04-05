import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";

const QrCodeGenerator = (props) => {
  const { items = [], shopName } = props;
  const [qr, setqr] = useState(JSON.stringify({}));

  useEffect(() => {
    let total = 0;
    const products = [];
    items.forEach(({ itemName, quantity, price }) => {
      products.push({
        item: itemName,
        price,
        qty: quantity,
      });
      total += price * quantity;
    });

    setqr(
      JSON.stringify({
        storename: shopName,
        products,
        total,
      })
    );
  }, [items, shopName]);

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
      <QRCode value={qr} />
    </Card>
  );
};

export default QrCodeGenerator;
