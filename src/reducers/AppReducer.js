import { ADD_ACTIVITY } from "../actions";

const INITIAL_STATE = [];

let nextId = 1;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ACTIVITY:
      console.log("addActivity chamado!", action.payload, state);
      const newActivity = {
        id: nextId++,
        text: action.payload
      };
      return [...state, newActivity];
    default:
      return state;
  }
};
