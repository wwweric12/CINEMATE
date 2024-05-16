import styled from 'styled-components';
import cancel from '../../assets/images/search_x.svg';

interface CancelButtonProps {
  onClick: () => void;
}

const CancelButton = ({ onClick }: CancelButtonProps) => {
  return (
    <Button onClick={onClick} type="reset">
      <Cancel src={cancel} />
    </Button>
  );
};

export default CancelButton;

const Button = styled.button`
  display: flex;
  align-items: center;
`;

const Cancel = styled.img``;
