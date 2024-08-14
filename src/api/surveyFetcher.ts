import axios from 'axios';
import { Axios } from '../util/axios/axios';

export interface SurveyProps {
  movieIds: number[];
  genreIds: number[];
}

export const PostSurvey = async ({ movieIds, genreIds }: SurveyProps) => {
  const movieIdsStr = movieIds.join(',');
  const genreIdsStr = genreIds.join(',');

  try {
    const res = await Axios.post(
      `api/survey?movieIds=${movieIdsStr}&genreIds=${genreIdsStr}`,
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

export const PatchSurveyGenre = async ( genreIds : SurveyProps["genreIds"]) => {
  const genreIdsStr = genreIds.join(',');
  try {
    const res = await Axios.patch(
      `api/survey/genre?genreIds=${genreIdsStr}`,
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

