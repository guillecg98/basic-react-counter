import { createContext } from "react";
import { CounterActions, CounterState } from "./CounterTypes";

type CounterContext = {
  state: CounterState;
  dispatch: (action: CounterActions) => void;
};

const CounterContext = createContext<CounterContext | undefined>(undefined);

export { CounterContext };
