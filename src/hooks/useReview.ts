import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Axios } from '../util/axios/axios';
import { GetReviewPayload } from '../types/GetReviewPayload';
import { SelectOption } from '../components/molecules/SelectFilter';

interface FetchReviewProps {
  token?: string;
  movieId: string;
  orderby: SelectOption;
}

const fetchReview = async ({ token, movieId, orderby }: FetchReviewProps) => {
  const res = await Axios.get(`/api/movie/${movieId}/review/content`, {
    params: {
      orderby,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const useReview = ({ movieId, orderby }: FetchReviewProps) => {
  const token = localStorage.getItem('accessToken') || '';
  const {
    isLoading: isReviewLoading,
    isError: isReviewError,
    data: reviewState,
    isSuccess,
  } = useQuery<GetReviewPayload, AxiosError>(
    ['review', { movieId, orderby }],
    () => fetchReview({ token, movieId, orderby }),
  );

  return { isReviewLoading, isReviewError, reviewState, isSuccess };
};
