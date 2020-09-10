import { combineReducers } from 'redux';
import directoryReducer from './Directory/directory.reducer';
const rootReducer = combineReducers({
    directory: directoryReducer,
    // crosses: null,
    // user: null,
    // calendar: null,
    // modals: null
})

export default rootReducer;