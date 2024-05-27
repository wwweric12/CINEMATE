import axios from 'axios';
import { Axios } from '../util/axios/axios';
import { DeleteReviewPayload } from '../types/DeleteReviewPayload';

export interface ReviewProps {
  content: string;
  movieId: string;
}

export const PostReview = async ({ movieId, content }: ReviewProps) => {
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

export const PutReview = async ({ movieId, content }: ReviewProps) => {
  try {
    const res = await Axios.put(
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

export const DeleteReview = async (
  movieId: string,
): Promise<DeleteReviewPayload | undefined> => {
  try {
    const res = await Axios.delete(`api/movie/${movieId}/review`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      alert(error);
    } else {
      throw error;
    }
  }
};
