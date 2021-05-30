import mediaApi from 'utils/api/mediaApi';
import { put } from 'redux-saga/effects';
import { mediaActions } from 'redux/actions';
import { notification } from 'antd';

export function* getMediaList(payload) {
  const { params, cancelToken } = payload.payload;
  try {
    yield put(mediaActions.saveMediaListLoading(true));
    const { data: response } = yield mediaApi.getMediaList({ params, cancelToken });
    yield put(mediaActions.saveMediaListLoading(false));

    if (!response?.results) {
      notification.error({
        message: 'Error',
        description: response.message,
      });
      return;
    }
    yield put(mediaActions.saveMediaList(response.results));
  } catch (err) {
    yield put(mediaActions.saveMediaListLoading(false));
  }
}
