import styled from 'styled-components';
import { ChangeEventHandler, FormEventHandler } from 'react';
import Logo from '../atoms/Logo';
import CancelButton from '../atoms/CancelButton';
import { ReactComponent as ChevronSvg } from '../../assets/images/chevron.svg';
import { ReactComponent as SearchSvg } from '../../assets/images/search.svg';

type DetailHeaderProps = {
  title?: string;
  onPrevClick: () => void;
};

type SearchBarProps = {
  onSearchSubmit: FormEventHandler<HTMLFormElement>;
  onSearchChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
  setSearchInput: React.Dispatch<React.SetStateAction<string>>;
};

type HeaderProps = {
  path: string;
} & (SearchBarProps | DetailHeaderProps);

export const Header = ({ path, ...props }: HeaderProps) => {
  const mainHeader = ['/login', '/', 'mypage'];
  const searchHeader = '/search';
  const detailHeader = [
    '/signup',
    '/survey/genre',
    '/survey/movies/1',
    '/survey/movies/2',
    '/mypage/movies',
    '/mypage/reviews',
  ];
  const renderInner = () => {
    if (path.includes(searchHeader)) {
      const { onSearchSubmit, value, setSearchInput, onSearchChange } =
        props as SearchBarProps;
      const handleCancelClick = () => {
        setSearchInput('');
      };

      return (
        <SearchBarContainer>
          <SearchBarBox onSubmit={onSearchSubmit}>
            <SearchImg />
            <Input value={value} onChange={onSearchChange} />
            <CancelButton onCancelClick={handleCancelClick} />
          </SearchBarBox>
        </SearchBarContainer>
      );
    } else if (detailHeader.includes(path) || path.includes('/movie')) {
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
  z-index: 30;
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

const SearchBarContainer = styled.div`
  padding: 26px;
`;

const SearchBarBox = styled.form`
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
