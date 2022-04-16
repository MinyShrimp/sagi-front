import { Info, InfosAction } from "../Interface/Info";

const nullInfos: Array<Info> = [
    { name: "", score: 0, star: 0, seat: 0, isPlus: true },
    { name: "", score: 0, star: 0, seat: 1, isPlus: true },
    { name: "", score: 0, star: 0, seat: 2, isPlus: true },
    { name: "", score: 0, star: 0, seat: 3, isPlus: true },
];

function infos_reducer( state = nullInfos, action: InfosAction ) {
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