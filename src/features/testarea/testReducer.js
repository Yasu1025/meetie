import { INCREMENT_COUNTER, DECREMENT_COUNTER } from "./testConstants";
import { createReducer } from "../../app/common/util/reducerUtil";

const initialState = {
  data: 999
};

// const testReducer = (state = initialState, actions) => {
//   switch (actions.type) {
//     case INCREMENT_COUNTER:
//         return {...state, data: state.data + 1}
//       break;
//     case DECREMENT_COUNTER:
//       return {...state, data: state.data - 1}
  
//     default:
//       break;
//   }
//   return state;
// }

/** Alternate way */
const incrementCounterFn = (state) => {
  return {...state, data: state.data + 1};
}
const decrementCounterFn = (state) => {
  return {...state, data: state.data - 1};
}

export default createReducer(initialState, {
  [INCREMENT_COUNTER]: incrementCounterFn,
  [DECREMENT_COUNTER]: decrementCounterFn
})