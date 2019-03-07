const initialState = [];

export function thingsReducer(state = initialState, action) {
  console.log("thingsReducer type:", action.type);
  switch (action.type) {
    case "GET_THINGS_SUCCESS": 
      return action.json.things;
  }
  return state;
}