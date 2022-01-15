import * as notesActions from './action';

// CRUD 
const saveNoteAPI = note => {
    return fetch('http://localhost:9000/notes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note),
    }).then(res => res.json())
}; 

const getNoteAPI = () => {
    return fetch('http://localhost:9000/notes', {
        method: 'GET',
    }).then(res => res.json())
}; 

const deleteNoteAPI = id => {
    return fetch(`http://localhost:9000/notes/${id}`, {
        method: 'DELETE',
    }).then(res => res.json())
};

// MIDDLEWARE asyn Action 
export const saveNote = text => dispatch => {
    const note = { text }
    dispatch(notesActions.addNoteStart);
    saveNoteAPI(note)
    .then(data => dispatch(notesActions.addNoteSuccess(data)))
    .catch(err => dispatch(notesActions.addNoteFailure(err)))
    .finally(()=>dispatch(notesActions.addNoteStop))
};

export const getNote = () => dispatch => {
    dispatch(notesActions.fetchNotesStart);
    getNoteAPI()
    .then(data => dispatch(notesActions.fetchNotesSuccess(data)))
    .catch(err => dispatch(notesActions.fetchNotesFailure(err)))
    .finally(()=>dispatch(notesActions.fetchNotesStop))
};


export const deleteNote = id => dispatch => {
    console.log(id)
    dispatch(notesActions.deleteNoteStart);
    deleteNoteAPI(id)
    .then(() => dispatch(notesActions.deleteNoteSuccess(id)))
    .catch(err => dispatch(notesActions.deleteNoteFailure(err)))
    .finally(()=> dispatch(notesActions.deleteNoteStop))
};

