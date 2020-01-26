import { combineReducers } from "redux";
import testReducer from "../../features/testarea/testReducer";
import eventReducers from "../../features/event/eventReducers";


const rootReducers = combineReducers({
  test: testReducer,
  events: eventReducers
});

export default rootReducers