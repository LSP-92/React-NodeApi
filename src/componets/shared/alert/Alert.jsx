import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const DescriptionAlerts = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity={props.severity}>
        <AlertTitle>{props.title}</AlertTitle>
        {props.message}
      </Alert>
    </div>
  );
};

export default DescriptionAlerts;
