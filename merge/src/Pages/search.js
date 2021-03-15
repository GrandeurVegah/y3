import React from "react";
import { useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import { getPrice } from "../componets";
import { getCompanyName } from "../componets"

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "75%",
      align: "center",
    },
  },
}));

export default function Search(props) {
  const classes = useStyles();
  const tempTicker = useRef(null);

  async function changeTicker(event) {
    event.preventDefault();
    await props.handleTicker(tempTicker.current.value);
    getPrice(tempTicker.current.value, props.setData);
    getCompanyName(tempTicker.current.value, props.setData)
    console.log(tempTicker.current.value);
  }

  return (
    <form
      onSubmit={changeTicker}
      className={classes.root}
      noValidate
      autoComplete="off"
    >
      <div>
        <Grid container justify="center">
          <TextField
            id="standard-helperText"
            defaultValue="TSLA"
            helperText="Please enter the comapny ticker"
            inputRef={tempTicker}
          />
        </Grid>
      </div>
    </form>
  );
}
