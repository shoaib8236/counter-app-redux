import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";

let rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;
