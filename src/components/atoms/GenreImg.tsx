import styled from 'styled-components';
import check from '../../assets/images/check.svg';

interface GenreImgProps {
  isCheck: boolean;
  src: string;
}

const GenreImg = ({ isCheck, src }: GenreImgProps) => {
  return (
    <GenreImgContainer>
      {isCheck && <Background />}
      {isCheck && <CheckImg src={check} />}
      <GenreImage src={src} />
    </GenreImgContainer>
  );
};

export default GenreImg;

const GenreImgContainer = styled.div`
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

const GenreImage = styled.img`
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
