import styled from 'styled-components';
import search from '../../assets/images/search.svg';
import CancelButton from '../atoms/CancelButton';

interface SearchBarProps {
  onChange: () => void;
  onSubmit: () => void;
  value: string;
}

const SearchBar = ({ onChange, onSubmit, value }: SearchBarProps) => {
  const handleClick = () => {};
  return (
    <SearchBarContainer onSubmit={onSubmit}>
      <SearchImg src={search} />
      <Input value={value} onChange={onChange} />
      <CancelButton onClick={handleClick} />
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.form`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkgray4};
  border-radius: 999px;
  padding: 8px;
`;

const SearchImg = styled.img`
  margin-right: 10px;
`;

const Input = styled.input`
  margin-right: 8px;
  font-size: 16px;
`;
