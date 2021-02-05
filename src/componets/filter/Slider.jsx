import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import "./slider.css";

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

export default function RangeSlider(props) {
  const classes = useStyles();

  return (
    <div className={`slider ${classes.root}`}>
      <span>Price</span>
      <div className={classes.root} pasive={"true"}>
        <Slider
          {...props}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          max={50000}
          min={0}
        />
      </div>
      <div className="slider-text">
        <span className="value-min">{`Price Min ${props.value[0]}`}</span>
        <span className="value-max">{`Price Max ${props.value[1]}`}</span>
      </div>
    </div>
  );
}
