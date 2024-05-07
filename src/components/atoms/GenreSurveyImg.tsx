import styled from 'styled-components';
import check from '../../assets/images/small_check.svg';

interface GenreSurveyImgProps {
  isChecked?: boolean;
  src?: string;
  name: string;
}

const GenreSurveyImg = ({ isChecked, src, name }: GenreSurveyImgProps) => {
  return (
    <SurveyImgContainer>
      <Background $isChecked={isChecked} />
      {isChecked && (
        <>
          <CheckImg src={check} />
        </>
      )}
      <GenreName $isChecked={isChecked}>{name}</GenreName>
      <SurveyImage src={src} />
    </SurveyImgContainer>
  );
};

export default GenreSurveyImg;

const SurveyImgContainer = styled.div`
  position: relative;
  min-width: 86px;
  height: 86px;
  border-radius: 14px;
`;

const Background = styled.div<{ $isChecked?: boolean }>`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  background-color: ${({ $isChecked }) =>
    $isChecked ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.5)'};
  border: ${({ $isChecked, theme }) =>
    $isChecked ? `1px solid ${theme.colors.choral}` : 'none'};
`;

const GenreName = styled.div<{ $isChecked?: boolean }>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  text-align: center;
  font-size: 15px;
  font-weight: 700;
  color: ${({ $isChecked, theme }) =>
    $isChecked ? theme.colors.choral : 'white'};
`;

const SurveyImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 14px;
  object-fit: cover;
`;

const CheckImg = styled.img`
  z-index: 5;
  position: absolute;
  top: 8px;
  left: 8px;
`;
