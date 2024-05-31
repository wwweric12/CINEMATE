import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Axios } from '../util/axios/axios';
import { GetRatingListPayload } from '../types/GetRatingPayload';

interface FetchRatingProps {
  token: string;
  movieId: string;
}

const fetchRating = async ({ token, movieId }: FetchRatingProps) => {
  const res = await Axios.get(`/api/movie/${movieId}/review/rating`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const useRating = (movieId: string) => {
  const token = localStorage.getItem('accessToken') || '';
  const {
    isLoading: isRatingLoading,
    isError: isRatingError,
    data: ratingState,
    isSuccess,
  } = useQuery<GetRatingListPayload, AxiosError>(
    ['rating', { token, movieId }],
    () => fetchRating({ token, movieId }),
  );

  return { isRatingLoading, isRatingError, ratingState, isSuccess };
};
