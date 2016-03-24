const selectedNoteId = (state = null, action) => {
    switch (action.type) {
        case 'SELECT_NOTE':
            return action.noteId;
        default:
            return state;
    }
};

export default selectedNoteId;
