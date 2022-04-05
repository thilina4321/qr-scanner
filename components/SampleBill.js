import Card from "@mui/material/Card";
import React from "react";
import TableComponent from "../UI/TableComponent";
import classes from "./sample.module.css";

const SampleBill = (props) => {
  const { items, shopName, total } = props;
  const date = new Date().toString();

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
        marginBottom: "10rem",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          backgroundColor: "rgb(0, 183, 255)",
          padding: "0.5rem 5rem",
        }}
      >
        Sample Bill
      </h1>
      <div className={classes.bill}>
        <div className={classes.bill__data}>
          <p>Shop Name : {shopName} </p>
          <p>Invoice : ...</p>
        </div>
        <div className={classes.bill__data}>
          <p>Date : {date} </p>
          <p>Number : ...</p>
        </div>
      </div>
      <TableComponent items={items} />
      <div style={{ textAlign: "end", width: "100%" }}>
        <h3> Total : {total} </h3>
      </div>
    </Card>
  );
};

export default SampleBill;
