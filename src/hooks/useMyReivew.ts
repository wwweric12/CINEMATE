import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Axios } from '../util/axios/axios';
import { GetReviewPayload } from '../types/GetReviewPayload';

interface FetchMyReviewProps {
  token: string;
}

const fetchMyReview = async ({ token }: FetchMyReviewProps) => {
  const res = await Axios.get('/api/myreview', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const useMyReview = () => {
  const token = localStorage.getItem('accessToken') || '';
  const {
    isLoading: isMyReviewLoading,
    isError: isMyReviewError,
    data: myReviewState,
    isSuccess,
  } = useQuery<GetReviewPayload, AxiosError>(['myReview', { token }], () =>
    fetchMyReview({ token }),
  );

  return {
    isMyReviewLoading,
    isMyReviewError,
    myReviewState,
    isSuccess,
  };
};
