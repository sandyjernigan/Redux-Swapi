// we'll need axios
import axios from 'axios'

// we'll need to create 3 different action types here.

// fetching data
export const GET_START = 'GET_START'
// if the request completes successfully
export const GET_SUCCESS = 'GET_SUCCESS'
// if the request fails
export const GET_FAILED = 'GET_FAILED'

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have control over our thunk-based action creator

export function getAction() {
	// can return a function because we're using redux-thunk
	return (dispatch) => { // receives direct access to the dispatcher
		// enter the "loading" state
		dispatch({ type: GET_START })

		axios.get('https://swapi.co/api/people/')
			.then((res) => {
				dispatch({ type: GET_SUCCESS, payload: res.data })
			})
			.catch((err) => {
				dispatch({ type: GET_FAILED, payload: err.response.data })
			})
	}
}