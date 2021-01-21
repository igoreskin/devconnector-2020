import { SET_ALERT, REMOVE_ALERT } from '../actions/types'

const initialState = [];

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch(type) {
    case SET_ALERT:
      console.log('IN REDUCER - SET ALERT: ', state, payload)
      return [...state, payload];

    case REMOVE_ALERT:
      console.log('PAYLOAD IN REMOVE ALERT: ', payload)
      const filtered = state.filter(alert => alert.id !== payload)
      console.log('IN REDUCER - REMOVE ALERT: ', filtered)
      return state.filter(alert => alert.id !== payload);

    default:
      return state;
  }
}