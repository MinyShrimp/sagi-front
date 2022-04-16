import { RecordAction, DummyRecord, getCleanInfos } from "../Interface/Record";

function record_reducer( state = DummyRecord, action: RecordAction ) {
    var _state = {...state};
    switch( action.type ) {
        case 'record/clean':
            const _tmp = { ...DummyRecord }
            _tmp.infos = getCleanInfos();
            return _tmp;
            
        case 'record/setName':
            const name = action.record.infos[action.index].name;
            _state.infos[action.index].name = name;
            return _state;

        case 'record/setIsPlus':
            const isPlus = action.record.infos[action.index].isPlus;
            _state.infos[action.index].isPlus = isPlus;
            _state.infos[action.index].score *= -1;
            return _state;
        
        case 'record/setScore':
            const score = action.record.infos[action.index].score;
            _state.infos[action.index].score = score;
            _state.infos[action.index].isPlus = ( score >= 0 );
            return _state;

        case 'record/setStar':
            const star = action.record.infos[action.index].star;
            _state.infos[action.index].star = star;
            return _state;
        
        case 'record/setDeposit':
            _state.deposit = action.record.deposit;
            return _state;
        
        case 'record/setUrl':
            _state.url = action.record.url;
            return _state;

        default:
            return state;
    }
}

export default record_reducer;