
import { createStore, combineReducers } from "redux";
// import modal_reducer from "./modals";
import nowpage_reducer from "./nowpage";
import perpects_reducer from "./perpect";
// import infos_reducer from "./Info";
import record_reducer from "./record";
import forum_reducer  from "./forum";

export const rootReducer = combineReducers({
    // modal: modal_reducer,
    nowpage: nowpage_reducer,
    // infos: infos_reducer,
    record: record_reducer,
    perpects: perpects_reducer,
    forum: forum_reducer,
});

export const rootStore = createStore( rootReducer );
export type  RootState = ReturnType<typeof rootReducer>;