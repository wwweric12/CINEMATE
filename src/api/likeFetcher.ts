import axios from 'axios';
import { Axios } from '../util/axios/axios';
import { PostLikeMoviePayload } from '../types/PostLikeMoviePayload';

export interface ReviewProps {
  movieId: number;
  reviewId: number;
}

export interface MovieProps{
  movieId:number
}

export const PostMovieLike = async ({
  movieId,
}: MovieProps): Promise<PostLikeMoviePayload | undefined> => {
  try {
    const res = await Axios.post(
      `api/movie/likes/${movieId}`,
      {},
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

export const PostReviewLike = async ({ movieId, reviewId }: ReviewProps) => {
  try {
    const res = await Axios.post(
      `api/review/likes/${movieId}/${reviewId}`,
      {},
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

export const PostMovieHates = async ({
  movieId,
}: MovieProps): Promise<PostLikeMoviePayload | undefined> => {
  try {
    const res = await Axios.post(
      `api/movie/hates/${movieId}`,
      {},
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