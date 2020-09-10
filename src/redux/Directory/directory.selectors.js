import { createSelector } from 'reselect';

const selectDirectory = state => state.directory;

export const selectShopCollections = createSelector(
    [selectDirectory],
    (directory) => directory.employees
)