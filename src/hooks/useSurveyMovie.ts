import { useQuery } from 'react-query';
import { AxiosError } from 'axios';
import { Axios } from '../util/axios/axios';
import { GetSurveyMoviePayload } from '../types/GetSurveyMoviePayload';

interface FetchSurveyProps {
  token: string;
}

const fetchSurvey = async ({ token }: FetchSurveyProps) => {
  const res = await Axios.get('/api/survey', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

export const useSurveyMovie = () => {
  const token = localStorage.getItem('accessToken') || '';
  const {
    isLoading: isSurveyMovieLoading,
    isError: isSurveyMovieError,
    data: surveyMovieState,
    isSuccess,
  } = useQuery<GetSurveyMoviePayload, AxiosError>(['surveylist'], () =>
    fetchSurvey({ token }),
  );

  return {
    isSurveyMovieLoading,
    isSurveyMovieError,
    surveyMovieState,
    isSuccess,
  };
};
