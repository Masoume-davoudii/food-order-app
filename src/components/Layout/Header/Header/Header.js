import React from "react";
import mealImage from "../../../../assets/Img/meal.jpg";
import classes from "./Header.module.css";
import { HeaderCartButton } from "./HeaderCartButton";
export const Header = ({ showCartHandler }) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>Food Order App</h1>
        <HeaderCartButton onClick={showCartHandler} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} placeHolder="Meal" />
      </div>
    </React.Fragment>
  );
};
