import { GET_START, GET_SUCCESS, GET_FAILED } from "../actions";

// all state values need an initial value
const initialState = {
  // Array characters, Boolean fetching, null error.
  characters: [],
  fetching: false,
  error: null
};

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {

    // action type FETCHING
    case GET_START: {
			return {
				...state,
				fetching: true,
			}
    }
    // action type SUCCESS
		case GET_SUCCESS: {
      const characters = action.payload
      console.log(characters)
			return {
				...state,
				fetching: false,
				error: null
			}
		}
    // action type FAILURE
		case GET_FAILED: {
			return {
				...state,
				fetching: false,
				error: action.payload.message,
			}
		}
    default:
      return state;
  }
};
