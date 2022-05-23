import { useState, useCallback, useMemo } from "react";
import store from "./../../store";
import { bindActionCreators } from "redux";
import { Action } from "./CounterSlice";

const { increment, decrement } = Action;

export const Counter = () => {
  const [value, setValue] = useState(store.getState().counter.value);
  const [step, setStep] = useState<number>(1);
  const [boundStep, setBoundStep] = useState<number>(10);

  const onIncrement = useCallback(() => {
    store.dispatch(increment(step));
  }, [step]);

  const onDecrement = useCallback(() => {
    store.dispatch(decrement(step));
  }, [step]);

  store.subscribe(() => {
    setValue(store.getState().counter.value);
  });

  // action function to directly call dispatch
  const boundActionCreators = useMemo(
    () => bindActionCreators(Action, store.dispatch),
    []
  );

  const onBoundIncrement = useCallback(() => {
    boundActionCreators.increment(boundStep);
  }, [boundActionCreators, boundStep]);

  const onBoundDecrement = useCallback(() => {
    boundActionCreators.decrement(boundStep);
  }, [boundActionCreators, boundStep]);

  return (
    <div>
      Count Value: {value}
      <br />
      <br />
      Action
      <div>
        step：
        <input
          type="number"
          value={step}
          onChange={(e) => {
            setStep(Number(e.target.value));
          }}
        />
        <button onClick={onIncrement}> + </button>
        <button onClick={onDecrement}> - </button>
      </div>
      <br />
      boundActionCreators
      <div>
        step：
        <input
          type="number"
          value={boundStep}
          onChange={(e) => {
            setBoundStep(Number(e.target.value));
          }}
        />
        <button onClick={onBoundIncrement}> + </button>
        <button onClick={onBoundDecrement}> - </button>
      </div>
    </div>
  );
};
