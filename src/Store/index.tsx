
import { createStore, combineReducers } from "redux";
import modal_reducer from "./modals";

export const rootReducer = combineReducers({
    modal: modal_reducer
});

export const rootStore = createStore( rootReducer );
export type  RootState = ReturnType<typeof rootReducer>;