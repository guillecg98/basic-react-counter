import { useCounter } from "./useCounter";

export const IncreaseCounterButton: React.FunctionComponent = () => {
  const { increaseCounter } = useCounter();

  return <button onClick={increaseCounter}>+</button>;
};
