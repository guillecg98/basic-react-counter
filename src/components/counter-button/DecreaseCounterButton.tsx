import { useCounter } from "./useCounter";

export const DecreaseCounterButton: React.FunctionComponent = () => {
  const { decreaseCounter } = useCounter();

  return <button onClick={decreaseCounter}>-</button>;
};
