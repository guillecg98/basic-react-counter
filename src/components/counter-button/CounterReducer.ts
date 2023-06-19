import {
  CounterActions,
  CounterState,
  DECREASE,
  INCREASE,
} from "./CounterTypes";

export const counterReducer: React.Reducer<CounterState, CounterActions> = (
  state,
  action
) => {
  switch (action.type) {
    case DECREASE:
      return state - 1;
    case INCREASE:
      return state + 1;

    default:
      return state;
  }
};
