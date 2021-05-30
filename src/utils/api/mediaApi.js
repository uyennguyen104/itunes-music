import whiteAxios from 'utils/axios/whiteAxios';

const mediaApi = {
  getMediaList: ({ params, cancelToken }) => {
    return whiteAxios.get(`search`, {
      params,
      cancelToken,
    });
  },
};

export default mediaApi;
