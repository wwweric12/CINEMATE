import styled from 'styled-components';
import fillHeartSvg from '../../assets/images/fill_heart.svg';
import emptyHeartSvg from '../../assets/images/heart.svg';

interface HeartButtonProps {
  isLike?: boolean;
  onClick: () => void;
}

const HeartButton = ({ isLike, onClick }: HeartButtonProps) => {
  return (
    <ButtonContainer onClick={onClick}>
      {isLike ? (
        <ReviewLike src={fillHeartSvg} />
      ) : (
        <ReviewLike src={emptyHeartSvg} />
      )}
    </ButtonContainer>
  );
};

export default HeartButton;

const ButtonContainer = styled.button``;

const ReviewLike = styled.img`
  margin-right: 8px;
`;
