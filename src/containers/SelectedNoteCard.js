import { connect } from 'react-redux';
import { resetNote } from '../actions';
import NoteCard from '../components/NoteCard';

const getSelectedNote = (notes, selectedNoteId) => {
    return notes[selectedNoteId];
};

const mapStateToProps = (state) => {
    return {
        note: getSelectedNote(state.notes, state.selectedNoteId)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onBackClick: () => {
            dispatch(resetNote())
        }
    };
};

const SelectedNoteCard = connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteCard);

export default SelectedNoteCard;
