import styled from 'styled-components';
import GenreSurveyForm from '../molecules/GenreSurveyForm';
import Description from '../atoms/Description';

const GenreSurveyTemplate = () => {
  return (
    <TemplateContainer>
      <Description
        title="선호하는장르를 선택해주세요"
        content="선호하는 장르 3가지를 선택해 주세요"
        state="survey"
      />
      <GenreSurveyForm />
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
