import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import MovieListTemplate from '../components/template/MovieListTemplate';
import { useRecommendMovie } from '../hooks/useRecommendMovie';
import { PostMovieLike } from '../api/likeFetcher';
import { backgroundState } from '../store/atoms/Background/state';
import SelectList from '../components/molecules/SelectList';

const MovieListPage = () => {
  const navigate = useNavigate();
  const { isMovieLoading, movieState, isMovieError } = useRecommendMovie();
  const [selectedMovieId, setSelectedMovieId] = useState<number | undefined>();
  const [background, setBackground] = useRecoilState(backgroundState);

  const handleHeartClick = async (movieId: number) => {
    const res = await PostMovieLike({ movieId });
  };

  const handleKebabClick = (movieId: number, event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setSelectedMovieId(movieId);
    setBackground(true);
  };
  if (isMovieError) {
    alert('로그인 정보가 유효하지 않습니다.');
    navigate('/login');
    return null;
  }

  if (isMovieLoading) {
    return <div>Loding...</div>;
  }
  if (!movieState) {
    return null;
  }

  return (
    <>
      <MovieListTemplate
        onMovieHeartClick={handleHeartClick}
        onMovieKebabClick={handleKebabClick}
        defaultRecommendResult={movieState?.data.defaultRecommendResult}
        genreMovieLists={movieState?.data.genreMovieLists}
      />
      {background && <SelectList movieId={selectedMovieId} />}
    </>
  );
};

export default MovieListPage;
