import styled from 'styled-components';
import { ReactComponent as CheckSvg } from '../../assets/images/check.svg';

interface SurveyImgProps {
  isChecked?: boolean;
  src: string;
}

const MovieSurveyImg = ({ isChecked, src }: SurveyImgProps) => {
  return (
    <SurveyImgContainer>
      {isChecked && (
        <>
          <Background />
          <CheckImg />
        </>
      )}
      <SurveyImage src={src} />
    </SurveyImgContainer>
  );
};

export default MovieSurveyImg;

const SurveyImgContainer = styled.div`
  position: relative;
  width: 88px;
  height: 132px;
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

const SurveyImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 14px;
`;

const CheckImg = styled(CheckSvg)`
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
