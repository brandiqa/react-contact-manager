const defaultState = {
  contacts: [],
  fetching: false,
  fetched: false,
  error: null
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    default:
      return state;
  }
}
