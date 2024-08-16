import { PostMovieHates, PostMovieLike } from '../api/likeFetcher';
import MypageMoviesTemplate from '../components/template/MypageMoviesTemplate';
import { useMyHatesMovie } from '../hooks/useMyHatesMovies';

const MyHatesMoviesPage = () => {
  const {  isMyHatesMovieLoading,isMyHatesMovieError,myHatesMovieState } = useMyHatesMovie();

  const handleCancelClick = async (movieId: number) => {
    const res = await PostMovieHates({ movieId });
    alert(res?.data);
  };

  

  if (isMyHatesMovieLoading) {
    return <div>Loding...</div>;
  }
  if (!myHatesMovieState) {
    return null;
  }
  return (
    <MypageMoviesTemplate
      myMovieList={myHatesMovieState.data.movies}
      onCancelClick={handleCancelClick}
      state="hates"
    />
  );
};

export default MyHatesMoviesPage;
