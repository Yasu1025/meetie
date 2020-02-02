import { combineReducers } from "redux";
import { reducer as FormReducer } from 'redux-form';
import testReducer from "../../features/testarea/testReducer";
import eventReducers from "../../features/event/eventReducers";


const rootReducers = combineReducers({
  form: FormReducer,
  test: testReducer,
  events: eventReducers
});

export default rootReducers