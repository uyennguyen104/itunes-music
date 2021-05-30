import { takeLatest } from 'redux-saga/effects';

// media
import { GET_MEDIA_LIST } from 'redux/constants/mediaConstants';
import { getMediaList } from 'saga/mediaSaga';

/**
 * Root saga manages watcher lifecycle
 */
export default function* defaultSaga() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount

  // media
  yield takeLatest(GET_MEDIA_LIST, getMediaList);
}
