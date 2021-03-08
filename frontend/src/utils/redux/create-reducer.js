export default function createReducer(
  reducers,
  initialState,
  finalReduce = (a) => a
) {
  return (state = initialState, action) => {
    const reducer = reducers[action.type]

    if (reducer) {
      if (typeof reducer !== "function") {
        throw new Error("A Reducer must be a function!")
      }

      const nextState = reducer(state, action)
      return finalReduce(nextState, action)
    }

    return state
  }
}
