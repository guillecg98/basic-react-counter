export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";

export interface IncreaseCounterAction {
  type: typeof INCREASE;
}

export interface DecreaseCounterAction {
  type: typeof DECREASE;
}

export type CounterState = number;
export type CounterActions = IncreaseCounterAction | DecreaseCounterAction;
