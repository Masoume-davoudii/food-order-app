import React, { useRef, useState } from "react";
import { Input } from "../../UI/Input/Input";
import classes from "./MealForm.module.css";
export const MealForm = (props) => {
  const [isValid, setIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="amount"
        ref={amountInputRef}
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "2",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+1 Add</button>
      {!isValid && <p1>Please enter valid amount 1 to 5.</p1>}
    </form>
  );
};
