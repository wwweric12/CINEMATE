import styled from 'styled-components';
import more from '../../assets/images/more_vector.svg';
import { ButtonProps } from './PrimaryButton';

const MoreButton = ({ onClick, children }: ButtonProps) => {
  return (
    <MoreBtn onClick={onClick}>
      <BtnText>{children}</BtnText>
      <ArrowImg src={more} />
    </MoreBtn>
  );
};

export default MoreButton;

const MoreBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background-color: transparent;
`;

const BtnText = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: white;
  margin-right: 10px;
`;

const ArrowImg = styled.img``;
