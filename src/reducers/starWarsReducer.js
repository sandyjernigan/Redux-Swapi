import { GET_START, GET_SUCCESS, GET_FAILED } from "../actions";

// all state values need an initial value
const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetching: true,
  error: null
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
