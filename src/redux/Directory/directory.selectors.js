import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectEmployeeDirectory = createSelector(
    [selectDirectory],
    (directory) => directory.employees
);

export const selectActiveEmployeeInfo = createSelector(
    [selectDirectory],
    (directory) => directory.activeEmployeeInfo
)

