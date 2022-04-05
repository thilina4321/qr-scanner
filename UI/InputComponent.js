import React from "react";
import TextField from "@mui/material/TextField";
import classes from "./input.module.css";

const InputComponent = (props) => {
  const { value, setValue, label, width, type = 'text' } = props;
  return (
    <div className={classes.div}>
      <TextField
        type={type}
        style={{ width: width }}
        className={classes.input}
        label={label}
        value={value}
        onChange={(e)=>setValue(e.target.value)}
      />
    </div>
  );
};

export default InputComponent;
