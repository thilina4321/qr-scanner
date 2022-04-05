import React, { useState } from "react";
import {useRouter} from 'next/router'
import InputComponent from "../UI/InputComponent";
import TableComponent from "../UI/TableComponent";
import Header from "./Header";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

const FirstPage = () => {
  const [shopName, setShopName] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useRouter()

  const generateBill = ()=>{
    navigate.push('/id')
  }

  return (
    <section>
      <Header />
      <InputComponent
        label="Shop Name"
        value={shopName}
        setValue={setShopName}
      />
      <div style={{ height: "2rem" }}></div>
      <TableComponent />
      <div style={{ height: "3rem" }}></div>
      <Card style={{ width: "96%", margin: "10px auto", padding: "1rem" }}>
        <h1
          style={{
            textAlign: "center",
            backgroundColor: "rgb(0, 183, 255)",
            padding: "1rem",
          }}
        >
          Add Item
        </h1>

        <InputComponent
          label="Item Name"
          value={itemName}
          setValue={setItemName}
        />
        <InputComponent
          label="Quantity"
          value={quantity}
          setValue={setQuantity}
        />
        <InputComponent label="Price" value={price} setValue={setPrice} />
        <div
          style={{
            display: "flex",
            gap: "2rem",
            margin: "1rem",
            textAlign: "end",
            justifyContent: "flex-end"
          }}
        >
          <Button variant="outlined">Add</Button>
          <Button onClick={generateBill} variant="outlined">Generate QR and Bill</Button>
        </div>
      </Card>
    </section>
  );
};

export default FirstPage;
