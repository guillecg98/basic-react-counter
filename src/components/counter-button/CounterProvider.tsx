import { useReducer } from "react";
import { counterReducer } from "./CounterReducer";
import { CounterContext } from "./CounterContext";

type Props = {
  children: React.ReactNode;
};

export const CounterProvider: React.FunctionComponent<Props> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(counterReducer, 0);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
