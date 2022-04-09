import Card from "@mui/material/Card";
import React from "react";
import TableComponent from "../UI/TableComponent";
import classes from "./sample.module.css";
import uuid from "react-uuid";

const SampleBill = (props) => {
  const { items, shopName, total } = props;
  const date = new Date().toString();

  return (
    <Card className={classes.smcard}>
      <h1 className={classes.smh1}>Sample Bill</h1>
      <div className={classes.bill}>
        <div className={classes.bill__data}>
          <p>Shop Name : {shopName} </p>
          <p>Invoice : {uuid()} </p>
        </div>
        <div className={classes.bill__data}>
          <p>Date : {date} </p>
          <p>Number : 1</p>
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
