import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import MovieDetailTemplate from '../components/template/MovieDetailTemplate';
import { useMovieDetail } from '../hooks/useMovieDetail';
import { PutRating, PutRatingProps } from '../api/ratingFetcher';
import { useRating } from '../hooks/useRating';
import { useReview } from '../hooks/useReview';
import { SelectOption } from '../components/molecules/SelectFilter';

const MovieDetailPage = () => {
  const params = useParams<{ id: string }>();
  const movieId = params.id || '';
  const [orderby, setOrderby] = useState<SelectOption>('latest');

  const { isRatingLoading, RatingState } = useRating(movieId);
  const { isMovieDetailLoading, MovieDetailState } = useMovieDetail(movieId);
  const { isReviewLoading, ReviewState } = useReview({ movieId, orderby });
  const [score, setScore] = useState<number>(RatingState?.data || 0);

  useEffect(() => {
    if (RatingState !== undefined) {
      setScore(RatingState.data);
    }
  }, [RatingState]);

  const handleHeartClick = (id: string) => {};

  const handleRatingClick = ({ movieId, rating }: PutRatingProps) => {
    PutRating({ movieId, rating });
  };

  if (isMovieDetailLoading || isRatingLoading || isReviewLoading) {
    return <div>Loding...</div>;
  }
  if (!MovieDetailState || !RatingState || !ReviewState) {
    return null;
  }

  return (
    MovieDetailState?.data && (
      <MovieDetailTemplate
        score={score}
        setScore={setScore}
        orderby={orderby}
        setOrderby={setOrderby}
        ReviewState={ReviewState.data}
        movie={MovieDetailState?.data.movie}
        credit={MovieDetailState?.data.credit}
        onHeartClick={() => handleHeartClick(movieId)}
        onRatingClick={handleRatingClick}
      />
    )
  );
};

export default MovieDetailPage;
