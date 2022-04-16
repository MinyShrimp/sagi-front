import { InfosAction } from "../Interface/Info";
import { DummyInfos }  from "../Interface/Record";

function infos_reducer( state = DummyInfos, action: InfosAction ) {
    var _state = [...state];
    switch( action.type ) {
        case 'infos/setIsPlus':
            const isPlus = action.value.isPlus;
            _state[action.index].isPlus = isPlus;
            _state[action.index].score *= -1;
            return _state;
        
        case 'infos/setScore':
            const score = action.value.score;
            _state[action.index].score = score;
            _state[action.index].isPlus = ( score >= 0 );
            return _state;

        case 'infos/setStar':
            const star = action.value.star;
            _state[action.index].star = star;
            return _state;

        default:
            return state;
    }
}

export default infos_reducer;