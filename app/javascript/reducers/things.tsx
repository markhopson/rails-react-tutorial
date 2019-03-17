interface Thing {
  name: string,
  guid: string
};

const initialState: Thing[] = [];

export function thingsReducer(state = initialState, action): Thing[] {
  console.log("thingsReducer type:", action.type);
  switch (action.type) {
    case "GET_THINGS_SUCCESS": 
      return action.json.things;
    /**
     * Uncomment below to generate a Typescript error by
     * having thingsReducer(), which is supposed to return Thing[],
     * return 1 (an Int)
     */
    // default:
    //   return 1;
  }
  return state;
}