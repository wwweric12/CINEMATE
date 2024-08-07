import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Axios } from '../util/axios/axios';
import { GetSearchMoviePayload } from '../types/GetSearchMoviesPayload';
import { useDebounce } from './useDebounce';

interface FetchSearchProps {
  token: string;
  title: string;
}

const fetchSearch = async ({ token, title }: FetchSearchProps) => {
  const res = await Axios.get('/api/search-movies', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      movieSearchType: 'TITLE',
      searchValue: title,
    },
  });
  return res.data;
};

export const useSearchMovie = (title: string) => {
  const debouncedQuery =useDebounce(title,700)


  const token = localStorage.getItem('accessToken') || '';
  const {
    isLoading: isSearchMovieLoading,
    isError: isSearchMovieError,
    data: searchMovieState,
    isSuccess,
  } = useQuery<GetSearchMoviePayload, AxiosError>(
    ['movieList', { token, debouncedQuery }],
    () => fetchSearch({ token, title: debouncedQuery }),
  );

  return {
    isSearchMovieLoading,
    isSearchMovieError,
    searchMovieState,
    isSuccess,
  };
};
