import { useParams } from 'react-router-dom';
import { useState } from 'react';
import MovieDetailTemplate from '../components/template/MovieDetailTemplate';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { PutRating, PutRatingProps } from '../api/ratingFetcher';

const MovieDetailPage = () => {
  const params = useParams<{ id: string }>();
  const [score, setScore] = useState<number>(0);
  const movieId = params.id || '';
  const { isMovieDetailLoading, MovieDetailState } = useMovieDetail(movieId);

  const handleHeartClick = (id: string) => {};

  const handleRatingClick = ({ movieId, rating }: PutRatingProps) => {
    const res = PutRating({ movieId, rating });
    console.log(res);
  };

  if (isMovieDetailLoading) {
    return <div>Loding...</div>;
  }
  if (!MovieDetailState) {
    return null;
  }

  return (
    MovieDetailState?.data && (
      <MovieDetailTemplate
        score={score}
        setScore={setScore}
        movie={MovieDetailState?.data.movie}
        credit={MovieDetailState?.data.credit}
        onHeartClick={() => handleHeartClick(movieId)}
        onRatingClick={handleRatingClick}
        onSelectChange={() => {}}
      />
    )
  );
};

export default MovieDetailPage;
