import styled from 'styled-components';
import { ReactComponent as FillHeartSvg } from '../../assets/images/fill_heart.svg';
import { ReactComponent as EmptyHeartSvg } from '../../assets/images/heart.svg';

interface HeartButtonProps {
  isLiked?: boolean;
  onClick: () => void;
}

const HeartButton = ({ isLiked, onClick }: HeartButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      {isLiked ? <FillHeartSvg /> : <EmptyHeartSvg />}
    </ButtonContainer>
  );
};

export default HeartButton;

const ButtonContainer = styled.button``;
