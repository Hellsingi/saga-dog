//  Actions

// action types
const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

// action creators

// function apiCallRequest() {
//   return { type: API_CALL_REQUEST };
// }

// function apiCallSuccess(data) {
//   return { type: API_CALL_SUCCESS, data };
// }

// function apiCallFailure(error) {
//   return { type: API_CALL_FAILURE, error };
// }

// Reducerr

const initialState = {
  fetching: false,
  dog: null,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case API_CALL_REQUEST:
      console.log("API_CALL_REQUEST state", state);
      return { ...state, fetching: true, error: null };
      // break;
    case API_CALL_SUCCESS:
      console.log("API_CALL_SUCCESS ", state);
      console.log("API_CALL_SUCCESS action", action);
      return { ...state, fetching: false, dog: action.dog };
      // break;
    case API_CALL_FAILURE:
      console.log("API_CALL_FAILURE", state);
      console.log("API_CALL_FAILURE action", action);
      return { ...state, fetching: false, dog: null, error: action.error };
      // break;
    default:
      return state;
  }
}
