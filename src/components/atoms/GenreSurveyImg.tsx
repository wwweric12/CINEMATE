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
      {isChecked && (
        <>
          <Background />
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
  width: 86px;
  height: 86px;
  border-radius: 14px;
`;

const Background = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  background-color: rgba(0, 0, 0, 0.8);
  border: ${({ theme }) => `1px solid ${theme.colors.choral}`};
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
`;

const CheckImg = styled.img`
  z-index: 5;
  position: absolute;
  top: 8px;
  left: 8px;
`;
