import { DirectoryActionTypes } from './directory.types';

const INITIAL_STATE = {
    employees: [],
    isFetching: false,
    errorMessage: undefined,
    activeEmployeeInfo: {
        name: '',
        position: '',
        email: '',
        phone: '',
        mobile: '',
        extension: '',
        manager: '',
        priority: '',
        url: 'gray_square.png'
    }
}

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case DirectoryActionTypes.FETCH_EMPLOYEE_DIRECTORY_START:
            return {
                ...state,
                isFetching: true
            }
        case DirectoryActionTypes.FETCH_EMPLOYEE_DIRECTORY_SUCCESS:
            return {
                ...state,
                isFetching: false,
                errorMessage: undefined,
                employees: action.payload
            }
        case DirectoryActionTypes.FETCH_EMPLOYEE_DIRECTORY_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        case DirectoryActionTypes.SET_ACTIVE_EMPLOYEE:
            return {
                ...state,
                activeEmployeeInfo: action.payload
            }
        default: return state;
    }
}

export default directoryReducer;