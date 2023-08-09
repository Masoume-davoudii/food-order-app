import React from "react";
import classes from "./SVG.module.css";
export const SVG = ({ path }) => {
  return <div className={classes.svg}>{path}</div>;
};
