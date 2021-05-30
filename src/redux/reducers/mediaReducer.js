import {
  SAVE_MEDIA_LIST,
  SAVE_MEDIA_LIST_LOADING,
  SAVE_MEDIA_LIST_GENRES,
} from 'redux/constants/mediaConstants';

const initialState = {
  mediaList: [],
  mediaListLoading: false,
  mediaGenres: [
    'Blues',
    'Classical',
    'Country',
    'Dance',
    'Electronic',
    'Hip-Hop',
    'Jazz',
    'Latin',
    'Metal',
    'Party',
    'R&B/Soul',
    'Reggae/Dancehall',
    'Soundtracks',
    'World',
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_MEDIA_LIST: {
      return {
        ...state,
        mediaList: action.mediaList ? [...action.mediaList] : [],
      }
    }
    case SAVE_MEDIA_LIST_LOADING: {
      return {
        ...state,
        mediaListLoading: action.mediaListLoading,
      };
    }
    case SAVE_MEDIA_LIST_GENRES: {
      return {
        ...state,
        mediaGenres: action.mediaGenres ? [...action.mediaGenres] : [],
      };
    }
    default:
      return state;
  }
}

export default reducer;
