import createToast from "../factories/createToast";
import { ADD_TOAST, REMOVE_TOAST } from "../constants";

export function addToast(options = {}) {
  console.log(options, 'options from actions addToast');
  return {
    payload: createToast(options),
    type: ADD_TOAST
  };
}

export function removeToast(id) {
  return {
    payload: id,
    type: REMOVE_TOAST
  };
}