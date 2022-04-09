import React, { Fragment, useState } from "react";
import InputComponent from "../UI/InputComponent";
import TableComponent from "../UI/TableComponent";
import Header from "./Header";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import SecondPage from "./SecondPage";
import classes from "./first.module.css";

const FirstPage = () => {
  const [shopName, setShopName] = useState("");
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");
  const [items, setItems] = useState([]);
  const [isFirst, setIsFirst] = useState(true);

  const generateBill = () => {
    setIsFirst(false);
  };

  const addItems = () => {
    if (!itemName || !quantity || !price) {
      setError("*please fill all the fields");
      return;
    }
    setError("");
    setItems((allitems) => [...allitems, { itemName, quantity, price }]);
    setItemName("");
    setQuantity("");
    setPrice("");
  };

  return (
    <section>
      
      {isFirst && (
        <Fragment>
          <Header />
          <InputComponent
            label="Shop Name"
            value={shopName}
            setValue={setShopName}
          />
          <div style={{ height: "2rem" }}></div>
          <TableComponent items={items} shopName={shopName} />
          <div style={{ height: "3rem" }}></div>
          <Card style={{ width: "96%", margin: "10px auto", padding: "1rem" }}>
            <h1 className={classes.cardh1}>Add Item</h1>

            <InputComponent
              label="Item Name"
              value={itemName}
              setValue={setItemName}
            />
            <InputComponent
              label="Quantity"
              value={quantity}
              setValue={setQuantity}
              type="number"
            />
            <InputComponent
              label="Price"
              value={price}
              setValue={setPrice}
              type="number"
            />
            {error && <p style={{ color: "red" }}> {error} </p>}
            <div className={classes.btndiv}>
              <Button onClick={addItems} variant="outlined">
                Add
              </Button>
              <Button onClick={generateBill} variant="outlined">
                Generate QR and Bill
              </Button>
            </div>
          </Card>
        </Fragment>
      )}

      {!isFirst && (
        <Fragment>
          <SecondPage shopName={shopName} items={items} />
        </Fragment>
      )}
    </section>
  );
};

export default FirstPage;
