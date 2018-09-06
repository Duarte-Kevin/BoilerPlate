import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import loggingMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware, loggingMiddleware))
);
