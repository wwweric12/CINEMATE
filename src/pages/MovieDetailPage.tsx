import { useParams } from 'react-router-dom';
import MovieDetailTemplate from '../components/template/MovieDetailTemplate';
import { useMovieDetail } from '../hooks/useMovieDetail';

const MovieDetailPage = () => {
  const params = useParams<{ id: string }>();
  const movieId = params.id || '';
  const { isMovieDetailLoading, MovieDetailState } = useMovieDetail(movieId);
  const handleHeartClick = (id: string) => {};

  if (isMovieDetailLoading) {
    return <div>Loding...</div>;
  }
  if (!MovieDetailState) {
    return null;
  }

  return (
    MovieDetailState?.data && (
      <MovieDetailTemplate
        movie={MovieDetailState?.data.movie}
        credit={MovieDetailState?.data.credit}
        onHeartClick={() => handleHeartClick(movieId)}
        onSelectChange={() => {}}
      />
    )
  );
};

export default MovieDetailPage;
