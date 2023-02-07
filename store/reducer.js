import { ACTION } from "./actions";

export function reducer(state, action) {
  switch (action.type) {
    case ACTION.select:
      return {
        ...state,
        selected: action.payload,
      };
      break;
    // case ACTION.delete: {
    //   return {
    //     ...state,
    //     // selected: payload.table,
    //   };
    // }
    // case "bla": {
    //   //update state
    // }
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}
