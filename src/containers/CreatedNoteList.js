import { connect } from 'react-redux';
import { selectNote } from '../actions';
import NoteList from '../components/NoteList';

const mapStateToProps = (state) => {
    return {
        notes: state.notes,
        noteIsSelected: state.selectedNoteId !== null
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onNoteClick: (id) => {
            dispatch(selectNote(id))
        }
    };
};

const CreatedNoteList = connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteList);

export default CreatedNoteList;
