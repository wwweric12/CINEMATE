import axios from 'axios';
import { Axios } from '../util/axios/axios';

export interface PutRatingProps {
  rating: number;
  movieId: number;
}

export const PutRating = async ({ movieId, rating }: PutRatingProps) => {
  try {
    const res = await Axios.put(
      `api/movie/${movieId}/review/rating`,
      {
        rating,
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
