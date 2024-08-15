import GenreSurveyTemplate from '../components/template/GenreSurveyTemplate';
import { useMyGenre } from '../hooks/useMyGenre';

const GenreModifyPage = () => {
  const { isMyGenresLoading, isMyGenresError, myGenres } = useMyGenre();
  return (
    <>{myGenres && <GenreSurveyTemplate state="modify" myGenres={myGenres.data} />}</>
  );
};

export default GenreModifyPage;
