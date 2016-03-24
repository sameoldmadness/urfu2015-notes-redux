export const selectNote = (noteId) => {
    return {
        type: 'SELECT_NOTE',
        noteId
    };
};

export const resetNote = () => {
    return {
        type: 'SELECT_NOTE',
        noteId: null
    };
};

export const addNote = (note) => {
    return {
        type: 'ADD_NOTE',
        note
    };
};
