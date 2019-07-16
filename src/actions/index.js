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
// remember that now we have controll over our thunk-based action creator
