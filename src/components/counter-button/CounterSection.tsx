import { useCounter } from "./useCounter";

export const CounterSection = () => {
  const { state } = useCounter();
  return (
    <>
      <h2>{state}</h2>
    </>
  );
};
