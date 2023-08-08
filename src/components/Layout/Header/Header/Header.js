import React from "react";
import mealImage from "../../../../assets/img/meal.jpg";
import classes from "./Header.module.css";
export const Header = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Food Order App</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} placeHolder="Meal" />
      </div>
    </React.Fragment>
  );
};
