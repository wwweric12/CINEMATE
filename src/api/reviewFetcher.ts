import axios from 'axios';
import { Axios } from '../util/axios/axios';

export interface PostReviewProps {
  content: string;
  movieId: string;
}

export const PostReview = async ({ movieId, content }: PostReviewProps) => {
  try {
    const res = await Axios.post(
      `api/movie/${movieId}/review/content`,
      {
        content,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      },
    );
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error);
    } else {
      throw error;
    }
  }
};
