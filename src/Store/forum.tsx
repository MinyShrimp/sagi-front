import { ForumAction, DummyForum } from "../Interface/Forum";

function forum_reducer( state = DummyForum, action: ForumAction ) {
    var _state = {...state};
    switch( action.type ) {
        case 'forum/clean':
            return {...DummyForum};

        case 'forum/setTitle':
            const title = action.forum.title;
            _state.title = title;
            return _state;
        
        case 'forum/setContents':
            const contents = action.forum.contents;
            _state.contents = contents;
            return _state;

        case 'forum/setDate':
            const date = action.forum.date;
            _state.date = date;
            return _state;
        
        case 'forum/setFile':
            const file = action.forum.file;
            _state.file = file;
            return _state;

        default:
            return state;
    }
}

export default forum_reducer;