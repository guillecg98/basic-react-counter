import { useMemo, useReducer } from "react";
import { counterReducer } from "./CounterReducer";
import { CounterContext } from "./CounterContext";

type Props = {
  children: React.ReactNode;
};

export const CounterProvider: React.FunctionComponent<Props> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(counterReducer, 0);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};
