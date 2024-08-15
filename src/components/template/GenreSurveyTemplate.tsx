import styled from 'styled-components';
import GenreSurveyForm from '../organisms/GenreSurveyForm';
import Description from '../atoms/Description';
import { MyGenre } from '../../types/GetMyGenresPayload';

interface GenreSurveyTemplateProps {
  state: 'modify' | 'setting';
  myGenres?: MyGenre;
}

const GenreSurveyTemplate = ({ state, myGenres }: GenreSurveyTemplateProps) => {
  return (
    <TemplateContainer>
      <Description
        title="선호하는 장르를 선택해주세요"
        content="선호하는 장르 3가지를 선택해 주세요"
        state="survey"
      />
      <GenreSurveyForm state={state} myGenres={myGenres} />
    </TemplateContainer>
  );
};

export default GenreSurveyTemplate;

const TemplateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 108px 40px;
  gap: 40px;
`;
