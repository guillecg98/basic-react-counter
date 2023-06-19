import { CounterActions } from "./CounterTypes";
import { useCounter } from "./useCounter";

type Props = {
  action: CounterActions;
};
export const CounterButton: React.FunctionComponent<Props> = ({ action }) => {
  const { increaseCounter, decreaseCounter } = useCounter();

  const handleButtonAction = {
    DECREASE: () => ({ text: "-", action: decreaseCounter }),
    INCREASE: () => ({ text: "+", action: increaseCounter }),
  };

  const dispatch = handleButtonAction[action.type]();
  return <button onClick={() => dispatch.action()}>{dispatch.text}</button>;
};
