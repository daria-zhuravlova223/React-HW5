// Core
import { combineReducers } from 'redux';
import { rootNotes } from '../redux/notes/reducer';

export const themeReducer = (state = { name: 'dark'}, action) => state;


// Reducers
export const rootReducer = combineReducers({
    theme: themeReducer,
    notes: rootNotes
});