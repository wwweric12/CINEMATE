import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Axios } from '../util/axios/axios';
import { GetMyMoviesPayload } from '../types/GetMyMoviesPayload';

interface FetchMyMovieProps {
  token: string;
}

const fetchMyMovie = async ({ token }: FetchMyMovieProps) => {
  const res = await Axios.get('/api/movie/likes', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const useMyMovie = () => {
  const token = localStorage.getItem('accessToken') || '';
  const {
    isLoading: isMyMovieLoading,
    isError: isMyMovieError,
    data: myMovieState,
    isSuccess,
  } = useQuery<GetMyMoviesPayload, AxiosError>(['myMovie', { token }], () =>
    fetchMyMovie({ token }),
  );

  return {
    isMyMovieLoading,
    isMyMovieError,
    myMovieState,
    isSuccess,
  };
};
