import React from "react";
import classes from "./MealSummary.module.css";
export const MealSummary = () => {
  return (
    <section className={classes.summary}>
      <p>Order your food and enjoy the high quality</p>
      <p>
        We offer various dishes from different countries with unique cuisines
        and high-quality ingredients
      </p>
    </section>
  );
};
