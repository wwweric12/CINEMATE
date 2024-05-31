import MovieSurveyTemplate from '../components/template/MovieSurveyTemplate';
import { useSurveyMovie } from '../hooks/useSurveyMovie';

const MovieSurveyPage = () => {
  const { isSurveyMovieLoading, surveyMovieState } = useSurveyMovie();
  if (isSurveyMovieLoading) {
    return <div>Loding...</div>;
  }
  if (!surveyMovieState) {
    return null;
  }
  return <MovieSurveyTemplate surveyList={surveyMovieState.data.movies} />;
};

export default MovieSurveyPage;
