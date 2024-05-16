import styled from 'styled-components';
import { FormEventHandler } from 'react';
import Logo from '../atoms/Logo';
import CancelButton from '../atoms/CancelButton';
import { ReactComponent as ChevronSvg } from '../../assets/images/chevron.svg';
import { ReactComponent as SearchSvg } from '../../assets/images/search.svg';

type DetailHeaderProps = {
  title?: string;
  onPrevClick: () => void;
};

type SearchBarProps = {
  onSearchSubmit: () => FormEventHandler<HTMLFormElement>;
  value: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

type HeaderProps = {
  path: string;
} & (SearchBarProps | DetailHeaderProps);

export const Header = ({ path, ...props }: HeaderProps) => {
  const mainHeader = ['/login', '/', 'mypage'];
  const searchHeader = ['/search'];
  const detailHeader = [
    '/signup',
    '/survey/genre',
    '/survey/movies/1',
    '/survey/movies/2',
    '/mypage/movies',
    '/mypage/reviews',
  ];
  const renderInner = () => {
    if (searchHeader.includes(path)) {
      const { onSearchSubmit, value, setSearchInput } = props as SearchBarProps;
      const handleCancelClick = () => {
        setSearchInput('');
      };

      const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value);
      };
      return (
        <SearchBarContainer onSubmit={onSearchSubmit}>
          <SearchImg />
          <Input value={value} onChange={handleSearchChange} />
          <CancelButton onClick={handleCancelClick} />
        </SearchBarContainer>
      );
    } else if (detailHeader.includes(path)) {
      const { onPrevClick, title } = props as DetailHeaderProps;
      return (
        <HeaderContainer>
          <PrevButton onClick={onPrevClick}>
            <ChevronImg />
            <PrevTitle>{title}</PrevTitle>
          </PrevButton>
        </HeaderContainer>
      );
    } else if (mainHeader.includes(path)) {
      return (
        <HeaderContainer>
          <Logo />
        </HeaderContainer>
      );
    }
  };
  return <>{renderInner()}</>;
};

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.darkgray2};
`;

const PrevButton = styled.button`
  display: flex;
  align-items: center;
`;

const ChevronImg = styled(ChevronSvg)`
  margin-right: 12px;
`;

const PrevTitle = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

const SearchBarContainer = styled.form`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkgray4};
  border-radius: 999px;
  padding: 8px;
`;

const SearchImg = styled(SearchSvg)`
  margin-right: 10px;
`;

const Input = styled.input`
  margin-right: 8px;
  font-size: 16px;
`;
