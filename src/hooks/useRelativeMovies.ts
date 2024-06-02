import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Axios } from '../util/axios/axios';
import { GetRelativeMovies } from '../types/GetRelativeMovies';

interface FetchRelativeMoviesProps {
  token: string;
  movieId: string;
}

const fetchRelativeMovies = async ({ token, movieId }: FetchRelativeMoviesProps) => {
  const res = await Axios.get(`/api/related-movie/${movieId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const useRelativeMovies = (movieId: string) => {
  const token = localStorage.getItem('accessToken') || '';
  const {
    isLoading: isRelativeMoviesLoading,
    isError: isRelativeMoviesError,
    data: relativeMoviesState,
    isSuccess,
  } = useQuery<GetRelativeMovies, AxiosError>(
    ['relativeMovies', { token, movieId }],
    () => fetchRelativeMovies({ token, movieId }),
  );

  return { isRelativeMoviesLoading, isRelativeMoviesError, relativeMoviesState, isSuccess };
};
