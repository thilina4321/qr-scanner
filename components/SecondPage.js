import React, { useEffect, useState } from "react";
import Header from "./Header";
import QrCodeGenerator from "./QrCode";
import SampleBill from "./SampleBill";

const SecondPage = (props) => {
  const { items = [], shopName } = props;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let totalVal = 0;
    items.forEach(({ quantity, price }) => {
      totalVal += price * quantity;
    });

    setTotal(totalVal);
  }, [items]);

  return (
    <section>
      <Header />
      <QrCodeGenerator items={items} shopName={shopName} />
      <SampleBill total={total} items={items} shopName={shopName} />
    </section>
  );
};

export default SecondPage;
