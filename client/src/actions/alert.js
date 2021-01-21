import { SET_ALERT, REMOVE_ALERT } from './types';

export const setAlert = (msg, alertType, id) => {
  console.log('IN ACTIONS - SET ALERT: ', id)
  return {
    type: SET_ALERT,
    payload: { msg, alertType, id }
  };
};

export const removeAlert = id => {
  console.log('IN ACTIONS - REMOVE ALERT: ', id)
  return {
    type: REMOVE_ALERT,
    payload: id
  }
}