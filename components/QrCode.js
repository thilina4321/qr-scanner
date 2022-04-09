import Card from "@mui/material/Card";
import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import classes from "./qr.module.css";

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
    <Card className={classes.qrcard}>
      <h1 className={classes.qrh1}>QR Code</h1>
      <QRCode value={qr} />
    </Card>
  );
};

export default QrCodeGenerator;
