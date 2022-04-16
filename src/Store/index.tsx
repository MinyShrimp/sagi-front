
import { createStore, combineReducers } from "redux";
import modal_reducer from "./modals";
import nowpage_reducer from "./nowpage";

export const rootReducer = combineReducers({
    modal: modal_reducer,
    nowpage: nowpage_reducer
});

export const rootStore = createStore( rootReducer );
export type  RootState = ReturnType<typeof rootReducer>;