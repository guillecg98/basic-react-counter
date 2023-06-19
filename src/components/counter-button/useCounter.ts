import { useCallback, useContext } from "react";
import { CounterContext } from "./CounterContext";
import { DECREASE, INCREASE } from "./CounterTypes";

export const useCounter = () => {
  const { state, dispatch } = useContext(CounterContext) as CounterContext;

  const increaseCounter = useCallback(() => {
    dispatch({ type: INCREASE });
  }, [dispatch]);

  const decreaseCounter = useCallback(() => {
    dispatch({ type: DECREASE });
  }, [dispatch]);

  return {
    state,
    increaseCounter,
    decreaseCounter,
  };
};
