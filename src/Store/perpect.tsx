import { Perpect, PerpectsAction } from "../Interface/Perpect";

function perpects_reducer( state: Array<Perpect> = [], action: PerpectsAction ) {
    var _state = [...state];
    switch( action.type ) {
        case 'perpect/add':
            _state.push( action.perpect );
            return _state;
        case 'perpect/clean':
            return [];
    }

    const idx = _state.findIndex((value) => value.id === action.index);
    if( idx === -1 ) { return state; }

    switch( action.type ) {
        case 'perpect/setName':
            const name = action.perpect.name;
            _state[idx].name = name;
            return _state;

        case 'perpect/setPerpect':
            const index = action.perpect.index;
            _state[idx].index = index;
            return _state;
        
        case 'perpect/remove':
            _state.splice( idx, 1 );
            return _state;

        default:
            return state;
    }
}

export default perpects_reducer;