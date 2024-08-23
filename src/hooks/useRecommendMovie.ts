import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Axios } from '../util/axios/axios';
import { GetMovieListPayload } from '../types/GetMovieListPayload';

const fetchMovie = async (token: string) => {
  try {
    const res = await Axios.get('/api/recommendation', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    } else {
      throw new Error('An unexpected error occurred');
    }
  }
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
