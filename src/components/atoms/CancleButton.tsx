import styled from 'styled-components';
import cancle from '../../assets/images/search_x.svg';

interface CancleButtonProps {
  onClick: () => void;
}

const CancleButton = ({ onClick }: CancleButtonProps) => {
  return (
    <Button onClick={onClick}>
      <Cancle src={cancle} />
    </Button>
  );
};

export default CancleButton;

const Button = styled.button``;

const Cancle = styled.img``;
