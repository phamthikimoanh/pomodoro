import * as types from "../action/actionTypes";

const historyInitState = {
  histories: []
};
export const histories = (state = historyInitState, action) => {
  switch (action.type) {
    case types.GET_ALL_HISTORIES_FROM_STORE:
      return {
        ...state,
        histories: action.payload.histories
      };
    case types.SAVE_HISTORY:
      return {
        ...state,
        histories: state.histories.concat(action.payload.history)
      };
    default:
      return state;
  }
};
