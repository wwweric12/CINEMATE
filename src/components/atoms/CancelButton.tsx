import styled from 'styled-components';
import cancel from '../../assets/images/search_x.svg';

interface CancelButtonProps {
  onCancelClick: () => void;
}

const CancelButton = ({ onCancelClick }: CancelButtonProps) => {
  return (
    <Button onClick={onCancelClick} type="reset">
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
