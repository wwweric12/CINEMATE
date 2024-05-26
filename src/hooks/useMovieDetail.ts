import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Axios } from '../util/axios/axios';
import { GetMovieDetailPayload } from '../types/GetMovieDetailPayload';

interface FetchMovieDetailProps {
  token: string;
  movieId: string;
}

const fetchMovieDetail = async ({ token, movieId }: FetchMovieDetailProps) => {
  const res = await Axios.get(`/api/movie/detail/${movieId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const useMovieDetail = (movieId: string) => {
  const token = localStorage.getItem('accessToken') || '';
  const {
    isLoading: isMovieDetailLoading,
    isError: isMovieDetailError,
    data: MovieDetailState,
    isSuccess,
  } = useQuery<GetMovieDetailPayload, AxiosError>(
    ['movieList', { token, movieId }],
    () => fetchMovieDetail({ token, movieId }),
  );

  return {
    isMovieDetailLoading,
    isMovieDetailError,
    MovieDetailState,
    isSuccess,
  };
};
