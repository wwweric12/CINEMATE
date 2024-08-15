import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Axios } from '../util/axios/axios';
import { GetMyGenresPayload } from '../types/GetMyGenresPayload';

interface FetchMyGenreProps {
  token: string;
}

const fetchMyGenre = async ({ token }: FetchMyGenreProps) => {
  const res = await Axios.get('/api/member-genres', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const useMyGenre = () => {
  const token = localStorage.getItem('accessToken') || '';
  const {
    isLoading: isMyGenresLoading,
    isError: isMyGenresError,
    data: myGenres,
    isSuccess,
  } = useQuery<GetMyGenresPayload, AxiosError>(['myGenre', { token }], () =>
    fetchMyGenre({ token })
  );

  return {
    isMyGenresLoading,
    isMyGenresError,
    myGenres,
    isSuccess,
  };
};
