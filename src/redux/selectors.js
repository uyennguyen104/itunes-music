import { createSelector } from 'reselect';

// media
const selectMediaState = (state) => (state.mediaReducer || {});
const makeSelectMediaList = () =>
  createSelector(selectMediaState, (substate) => substate.mediaList);
const makeSelectMediaListLoading = () =>
  createSelector(selectMediaState, (substate) => substate.mediaListLoading);
const makeSelectMediaGenres = () =>
  createSelector(selectMediaState, (substate) => substate.mediaGenres);

export {
  makeSelectMediaList,
  makeSelectMediaListLoading,
  makeSelectMediaGenres,
};
