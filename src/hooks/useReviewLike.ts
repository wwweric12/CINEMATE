import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { PostReviewLike } from '../api/likeFetcher';

export const usePostReviewLike = () => {
  const queryClient = useQueryClient();

  return useMutation(PostReviewLike, {
    onSuccess: (data) => {
      queryClient.invalidateQueries('review');
    },
    onError: (error) => {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data);
      } else {
        alert(error);
      }
    },
  });
};
