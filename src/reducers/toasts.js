import { ADD_TOAST, REMOVE_TOAST } from "../constants";

export default function toasts(state = [], action) {
  const { payload, type } = action;
  console.log(...state, 'state');
  console.log(action, 'action');

  switch (type) {
    case ADD_TOAST: {
      console.log(payload, ...state, 'reducer type add_toast');
      return [payload, ...state];
    }


    case REMOVE_TOAST:
      return state.filter(toast => toast.id !== payload);

    default:
      return state;
  }
}