import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Reducer as counterReducer } from "../features/counter";
import { logger, test } from "./middleware";

const rootReducer = combineReducers({
  counter: counterReducer,
});

const store = createStore(
  rootReducer,
  compose(applyMiddleware(logger), applyMiddleware(test))
);

export default store;
