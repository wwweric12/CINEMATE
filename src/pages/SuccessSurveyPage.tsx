import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { PostSurvey } from '../api/surveyFetcher';
import SucessTemplate from '../components/template/SuccessTemplate';
import { SurveyListState, surveyListState } from '../store/atoms/Movie/state';

const SuccessSurveyPage = () => {
  const [surveyListData, setSurveyListData] =
    useRecoilState<SurveyListState>(surveyListState);
  const navigate = useNavigate();
  
  const handleSurveySubmit = () => {
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
