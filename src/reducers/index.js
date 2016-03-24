import { combineReducers } from 'redux';
import notes from './notes';
import selectedNoteId from './selectedNoteId';

const noteApp = combineReducers({
    notes,
    selectedNoteId
});

export default noteApp;
