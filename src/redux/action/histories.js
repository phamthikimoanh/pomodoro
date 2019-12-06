import {GET_ALL_HISTORIES, GET_ALL_HISTORIES_FROM_STORE, SAVE_HISTORY, LISTEN_SAVE_HISTORY} from "./actionTypes";

export const getAllHistory = () => ({
    type: GET_ALL_HISTORIES
});

export const getAllHistoriesFromStore = (histories) => {
    return {
        type: GET_ALL_HISTORIES_FROM_STORE,
        payload: {histories}
    }
};
export const addHistory = (history) => ({
    type: SAVE_HISTORY, payload: {history}
});
export const listenAddHistoryAction = (history, histories) => {
    return {
        type: LISTEN_SAVE_HISTORY, payload: {history, histories}
    }
};
