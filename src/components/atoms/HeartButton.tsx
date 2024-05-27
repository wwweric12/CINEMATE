import styled from 'styled-components';
import { useState } from 'react';
import { ReactComponent as FillHeartSvg } from '../../assets/images/fill_heart.svg';
import { ReactComponent as EmptyHeartSvg } from '../../assets/images/heart.svg';

interface HeartButtonProps {
  isMine?: boolean;
  isLiked?: boolean;
  onClick: () => void;
}

const HeartButton = ({ isMine, isLiked, onClick }: HeartButtonProps) => {
  const [heart, setHeart] = useState(isLiked);
  return (
    <ButtonContainer
      disabled={isMine}
      onClick={() => {
        onClick();
        setHeart((prev) => !prev);
      }}
    >
      {heart ? <FillHeartSvg /> : <EmptyHeartSvg />}
    </ButtonContainer>
  );
};

export default HeartButton;

const ButtonContainer = styled.button``;
