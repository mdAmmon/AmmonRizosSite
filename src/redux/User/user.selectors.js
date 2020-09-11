import { createSelector } from 'reselect';

const selectUser = state => state.user;

export const selectCurrentUser = createSelector([selectUser], user => user.currentUser);

export const selectisLoggingIn = createSelector([selectUser], user => user.isLoggingIn);

export const selectHasLoginError = createSelector([selectUser], user => !!user.loginError);

export const selectIsLoggedIn = createSelector([selectCurrentUser], user => (user.name) ? true: false);



