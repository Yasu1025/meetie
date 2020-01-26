import { combineReducers } from "redux";
import testReducer from "../../features/testarea/testReducer";
import eventReducers from "../../features/event/eventReducers";


const rootReducers = combineReducers({
  test: testReducer,
  event: eventReducers
});

export default rootReducers