import { combineReducers } from 'redux';
import directoryReducer from './Directory/directory.reducer';
import userReducer from './User/user.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    directory: directoryReducer,
    // crosses: null,
    // calendar: null,
    // modals: null
})

export default rootReducer;