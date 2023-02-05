import { ACTION } from "./actions";

export function reducer(state, action) {
  switch (action.type) {
    case ACTION.table:
      return {
        ...state,
        selected: action.payload,
      };
    case ACTION.delete: {
      return {
        ...state,
        // selected: payload.table,
      };
    }
    case "bla": {
      //update state
    }
    default:
      return state;
  }
}
