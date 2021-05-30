import {
  GET_MEDIA_LIST,

  SAVE_MEDIA_LIST,
  SAVE_MEDIA_LIST_LOADING,
  SAVE_MEDIA_LIST_GENRES,
} from 'redux/constants/mediaConstants';

export function getMediaList(payload) {
  return {
    type: GET_MEDIA_LIST,
    payload
  };
}

// mutation
export function saveMediaList(mediaList) {
  console.log(mediaList);
  return {
    type: SAVE_MEDIA_LIST,
    mediaList
  };
}
export function saveMediaListLoading(mediaListLoading) {
  return {
    type: SAVE_MEDIA_LIST_LOADING,
    mediaListLoading
  };
}
export function saveMediaListGenres(mediaListGenres) {
  return {
    type: SAVE_MEDIA_LIST_GENRES,
    mediaListGenres
  };
}
