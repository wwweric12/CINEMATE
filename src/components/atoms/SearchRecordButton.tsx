import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CancelButton from './CancelButton';

interface SearchRecordButtonProps {
  text: string;
  onKeywordRemove: () => void;
}

const SearchRecordButton = ({
  text,
  onKeywordRemove,
}: SearchRecordButtonProps) => {
  return (
    <ButtonContainer>
      <Link to={`/search/${text}`}>
        <ButtonField>{text}</ButtonField>
      </Link>
      <CancelButton onCancelClick={onKeywordRemove} />
    </ButtonContainer>
  );
};

export default SearchRecordButton;

const ButtonContainer = styled.div`
  display: flex;
  width: fit-content;
  justify-content: space-between;
  min-width: 116px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkgray4};
  padding: 8px 14px;
  border: ${({ theme }) => theme.colors.darkgray3} 1px solid;
  border-radius: 18px;
`;

const ButtonField = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: white;
  margin-right: 14px;
`;
