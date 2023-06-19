import { useContext } from "react";
import { CounterContext } from "./CounterContext";
import { DECREASE, INCREASE } from "./CounterTypes";

export const useCounter = () => {
  const { state, dispatch } = useContext(CounterContext) as CounterContext;

  const increaseCounter = () => {
    dispatch({ type: INCREASE });
  };

  const decreaseCounter = () => {
    dispatch({ type: DECREASE });
  };

  return {
    state,
    increaseCounter,
    decreaseCounter,
  };
};
