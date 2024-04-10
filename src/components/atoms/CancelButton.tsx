import styled from 'styled-components';
import cancle from '../../assets/images/search_x.svg';

interface CancelButtonProps {
  onClick: () => void;
}

const CancleButton = ({ onClick }: CancelButtonProps) => {
  return (
    <Button onClick={onClick}>
      <Cancel src={cancle} />
    </Button>
  );
};

export default CancleButton;

const Button = styled.button`
  display: flex;
  align-items: center;
`;

const Cancel = styled.img``;
