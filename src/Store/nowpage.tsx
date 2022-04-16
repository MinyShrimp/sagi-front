
const pages = {
    0: "user",
    1: "record",
    2: "forum",
    3: "contact",
    4: "login",
    5: "signup",
    6: "addrecord",
    7: "addforum",
} as const;
export type PAGES = typeof pages[ keyof typeof pages ];

export interface NowPageAction {
    type: string,
    value: PAGES
}

const nullPage = {
    nowpage: "user"
};

function nowpage_reducer( state = nullPage, action: NowPageAction ) {
    var _state = {...state};
    switch( action.type ) {
        case 'nowpage/set':
            _state.nowpage = action.value;
            return _state;

        default:
            return state;
    }
}

export default nowpage_reducer;