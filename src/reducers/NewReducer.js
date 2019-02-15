import { CHANGE_TEXT } from "../actions";

const INITIAL_STATE = {
  text: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return { ...state, texto: action.payload };
    default:
      return state;
  }
};
