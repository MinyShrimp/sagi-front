
import { BaseAction } from "../Interface/BaseAction";

const nullModals = {
    loginModal: false,
    addRecordModal: false,
    addForumModal: false
};

function modal_reducer( state = nullModals, action: BaseAction ) {
    var _state = {...state};
    switch( action.type ) {
        case 'login/show':
            _state.loginModal = true;
            return _state;
        case 'login/hide':
            _state.loginModal = false;
            return _state;

        case 'addrecord/show':
            _state.addRecordModal = true;
            return _state;
        case 'addrecord/hide':
            _state.addRecordModal = false;
            return _state;
        
        case 'addforum/show':
            _state.addForumModal = true;
            return _state;
        case 'addforum/hide':
            _state.addForumModal = false;
            return _state;

        default:
            return state;
    }
}

export default modal_reducer;