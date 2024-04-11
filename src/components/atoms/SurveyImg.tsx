import styled from 'styled-components';
import check from '../../assets/images/check.svg';

interface SurveyImgProps {
  isCheck: boolean;
  src: string;
  sort: 'genre' | 'movie';
}

const SurveyImg = ({ isCheck, src, sort }: SurveyImgProps) => {
  return (
    <SurveyImgContainer $sort={sort}>
      {isCheck && <Background />}
      {isCheck && <CheckImg src={check} />}
      <SurveyImage src={src} />
    </SurveyImgContainer>
  );
};

export default SurveyImg;

const SurveyImgContainer = styled.div<{ $sort: SurveyImgProps['sort'] }>`
  position: relative;

  width: ${({ $sort }) => {
    if ($sort === 'genre') {
      return '86px';
    } else if ($sort === 'movie') {
      return '88px';
    }
  }};
  height: ${({ $sort }) => {
    if ($sort === 'genre') {
      return '86px';
    } else if ($sort === 'movie') {
      return '132px';
    }
  }};
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

const CheckImg = styled.img`
  z-index: 5;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
