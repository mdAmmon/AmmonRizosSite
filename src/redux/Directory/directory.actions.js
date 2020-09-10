import { DirectoryActionTypes } from './directory.types';

export const fetchEmployeeDirectoryStart = configParams => ({
    type: DirectoryActionTypes.FETCH_EMPLOYEE_DIRECTORY_START,
    payload: configParams
})

export const fetchEmployeeDirectorySuccess = employeeDirectory => ({
    type: DirectoryActionTypes.FETCH_EMPLOYEE_DIRECTORY_SUCCESS,
    payload: employeeDirectory
})

export const fetchEmployeeDirectoryFailure = errorMessage => ({
    type: DirectoryActionTypes.FETCH_EMPLOYEE_DIRECTORY_FAILURE,
    payload: errorMessage
})

export const setActiveEmployee = activeEmployeeInfo => ({
    type: DirectoryActionTypes.SET_ACTIVE_EMPLOYEE,
    payload: activeEmployeeInfo
})

