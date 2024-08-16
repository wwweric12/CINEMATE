import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Axios } from '../util/axios/axios';
import { GetMyMoviesPayload } from '../types/GetMyMoviesPayload';

interface FetchMyHatesMovieProps {
  token: string;
}

const fetchMyHatesMovie = async ({ token }: FetchMyHatesMovieProps) => {
  const res = await Axios.get('/api/movie/hates', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const useMyHatesMovie = () => {
  const token = localStorage.getItem('accessToken') || '';
  const {
    isLoading: isMyHatesMovieLoading,
    isError: isMyHatesMovieError,
    data: myHatesMovieState,
    isSuccess,
  } = useQuery<GetMyMoviesPayload, AxiosError>(['myHatesMovie', { token }], () =>
    fetchMyHatesMovie({ token }),
  );

  return {
    isMyHatesMovieLoading,
    isMyHatesMovieError,
    myHatesMovieState,
    isSuccess,
  };
};
