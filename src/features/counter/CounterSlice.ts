export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

export const initialState: CounterState = {
  value: 0,
  status: "idle",
};

export const Action = {
  increment: (step: number = 1) => ({
    type: "counter/incremented",
    step,
  }),
  decrement: (step: number = 1) => ({
    type: "counter/decremented",
    step,
  }),
};

export const Reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, value: state.value + (action.step ? action.step : 1) };
    case "counter/decremented":
      return { ...state, value: state.value - (action.step ? action.step : 1) };
    default:
      return state;
  }
};
