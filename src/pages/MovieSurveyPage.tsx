import MovieSurveyTemplate from '../components/template/MovieSurveyTemplate';
import { useSurveyMovie } from '../hooks/useSurveyMovie';

const MovieSurveyPage = () => {
  const { isSurveyMovieLoading, SurveyMovieState } = useSurveyMovie();
  if (isSurveyMovieLoading) {
    return <div>Loding...</div>;
  }
  if (!SurveyMovieState) {
    return null;
  }
  return <MovieSurveyTemplate surveyList={SurveyMovieState.data.movies} />;
};

export default MovieSurveyPage;
