import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Axios } from '../util/axios/axios';
import { GetMypagePayload } from '../types/GetMypagePayload';

interface FetchMyPageProps {
  token: string;
}

const fetchMyPage = async ({ token }: FetchMyPageProps) => {
  const res = await Axios.get('/api/mypage', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const useMypage = () => {
  const token = localStorage.getItem('accessToken') || '';
  const {
    isLoading: isMyPageLoading,
    isError: isMyPageError,
    data: myPageState,
    isSuccess,
  } = useQuery<GetMypagePayload, AxiosError>(['mypage'], () =>
    fetchMyPage({ token }),
  );

  return {
    isMyPageLoading,
    isMyPageError,
    myPageState,
    isSuccess,
  };
};
