export const createReducer = (initialState, fnMap) => {
  return (state = initialState, a) => {
    console.log(a)
    const handler = fnMap[a.type];
    return handler ? handler(state, a.payload) : state;
  }
}