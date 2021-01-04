import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import "./slider.css";

const useStyles = makeStyles({
  root: {
    width: 400,
  },
});

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 5000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={`slider ${classes.root}`}>
      <span>Price</span>
      <div className={classes.root} pasive={"true"}>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          aria-labelledby="range-slider"
          max={5000}
          min={0}
        />
      </div>
      <div className="slider-text">
        <span className="value-min">{`Price Min ${value[0]}`}</span>
        <span className="value-max">{`Price Max ${value[1]}`}</span>
      </div>
    </div>
  );
}
