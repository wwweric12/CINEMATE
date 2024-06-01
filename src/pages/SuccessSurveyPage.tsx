import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { PostSurvey } from '../api/surveyFetcher';
import SucessTemplate from '../components/template/SuccessTemplate';
import { SurveyListState, surveyListState } from '../store/atoms/Movie/state';

const SuccessSurveyPage = () => {
  const [surveyListData, setSurveyListData] =
    useRecoilState<SurveyListState>(surveyListState);
  const navigate = useNavigate();

  const handleSelectedSurvey = () => {
    const movieIds: number[] = surveyListData.movie.reduce<number[]>(
      (movies, item) => {
        if (item.selected) {
          movies.push(item.id);
        }
        return movies;
      },
      [],
    );
    const genreIds: number[] = surveyListData.genre.reduce<number[]>(
      (genres, item) => {
        if (item.selected) {
          genres.push(item.id);
        }
        return genres;
      },
      [],
    );
    return { movieIds, genreIds };
  };

  const handleSurveySubmit = () => {
    const { movieIds, genreIds } = handleSelectedSurvey();
    const res = PostSurvey({ movieIds, genreIds });
    navigate('/');
  };

  return (
    <SucessTemplate
      onMovePage={handleSurveySubmit}
      state="survey"
      mainText="사용자 맞춤 설정이 완료되었습니다."
      description="추천된 영화를 즐겨보세요!"
      buttonText="메인페이지로 이동"
    />
  );
};

export default SuccessSurveyPage;
