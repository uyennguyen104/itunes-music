import { createSelector } from 'reselect';

// media
const selectMediaState = (state) => (state.mediaReducer || {});
const makeSelectMediaList = () =>
  createSelector(selectMediaState, (substate) => substate.mediaList);
const makeSelectMediaListLoading = () =>
  createSelector(selectMediaState, (substate) => substate.mediaListLoading);
const makeSelectMediaListGenres = () =>
  createSelector(selectMediaState, (substate) => substate.mediaListGenres);

export {
  makeSelectMediaList,
  makeSelectMediaListLoading,
  makeSelectMediaListGenres,
};
