import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Axios } from '../util/axios/axios';
import { GetMovieListPayload } from '../types/GetMovieListPayload';

const fetchMovie = async () => {
  const res = await Axios.get('/api/recommendation', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
    },
  });
  return res.data;
};

export const useRecommendMovie = () => {
  const {
    isLoading: isMovieLoading,
    isError: isMovieError,
    data: MovieState,
    isSuccess,
  } = useQuery<GetMovieListPayload, AxiosError>(['movieList'], fetchMovie);

  return { isMovieLoading, isMovieError, MovieState, isSuccess };
};
