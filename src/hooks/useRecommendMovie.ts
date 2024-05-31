import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Axios } from '../util/axios/axios';
import { GetMovieListPayload } from '../types/GetMovieListPayload';

const fetchMovie = async (token: string) => {
  const res = await Axios.get('/api/recommendation', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const useRecommendMovie = () => {
  const token = localStorage.getItem('accessToken');
  const {
    isLoading: isMovieLoading,
    isError: isMovieError,
    data: movieState,
    isSuccess,
  } = useQuery<GetMovieListPayload, AxiosError>(
    ['movieList', token],
    () => fetchMovie(token || ''),
    {
      enabled: !!token,
    },
  );

  return { isMovieLoading, isMovieError, movieState, isSuccess };
};
