import { initialDb } from "../utils/utils";
import { ACTION } from "./actions";

export function reducer(state, { type, payload, id }) {
  const table = payload;
  switch (type) {
    case ACTION.select:
      return {
        ...state,
        selected: payload,
      };
    case ACTION.delete: {
      return {
        ...state,
        tables: {
          ...state.tables,
          [table]: state.tables[table].filter((row) => row.id !== id),
        },
      };
    }
    case ACTION.restore: {
      return {
        ...state,
        tables: {
          ...state.tables,
          [table]: initialDb.tables[table],
        },
      };
    }
    case ACTION.clear: {
      return {
        ...state,
        tables: {
          ...state.tables,
          [table]: [],
        },
      };
    }
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}
