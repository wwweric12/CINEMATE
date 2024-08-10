import styled from 'styled-components';
import { ChangeEventHandler, FormEventHandler, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import Logo from '../atoms/Logo';
import CancelButton from '../atoms/CancelButton';
import { ReactComponent as ChevronSvg } from '../../assets/images/chevron.svg';
import { ReactComponent as SearchSvg } from '../../assets/images/search.svg';
import { searchState } from '../../store/atoms/Search/state';
import { keywordState } from '../../store/atoms/Keyword/state';
import { useSearchMovie } from '../../hooks/useSearchMovie';

type DetailHeaderProps = {
  title?: string;
  onPrevClick: () => void;
};

type HeaderProps = {
  path: string;
} &  DetailHeaderProps;

export const Header = ({ path, ...props }: HeaderProps) => {
  const param = useParams();
  const mainHeader = ['/login', '/', 'mypage'];
  const searchHeader = '/search';
  const detailHeader = [
    '/signup',
    '/survey/genre',
    '/survey/movies/1',
    '/survey/movies/2',
    '/mypage/movies',
    '/mypage/reviews',
    `/movie/${param.id}/review`,
  ];




  const renderInner = () => {
    if (path.includes(searchHeader)) {
      const [searchMovie, setSearchMovie] = useRecoilState(searchState);
      const [keyword, setKeyword] = useRecoilState(keywordState);
      const [searchInput, setSearchInput] = useState('');
      const navigate =useNavigate()
      const { searchMovieState } = useSearchMovie(searchInput);

      useEffect(() => {
        if (searchMovieState?.data) {
          setSearchMovie(searchMovieState.data);
        }
        console.log(searchMovieState)
      }, [searchMovieState]);

      const handleCancelClick = () => {
        setSearchInput('');
      };

      const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target.value === '') {
          setSearchMovie([]);
        }
        setSearchInput(e.target.value);
      };
    
      const handleSearchSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if(searchInput.trim()!=""){
          const newKeyword = {
            id: Date.now(),
            text: searchInput,
          };
          setKeyword((prev) => {
            const isDuplicate = prev.some((item) => item.text === newKeyword.text);
            return isDuplicate ? prev : [...prev, newKeyword];
          });
          navigate(`/search/${searchInput}`);
        }
        setSearchInput('');
        setSearchMovie([]);
        
      };


      return (
        <SearchBarContainer>
          <SearchBarBox onSubmit={handleSearchSubmit}>
            <SearchImg />
            <Input value={searchInput} onChange={handleSearchChange} />
            <CancelButton onCancelClick={handleCancelClick} />
          </SearchBarBox>
        </SearchBarContainer>
      );
    } else if (detailHeader.includes(path) || path.includes('/movies')) {
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
  position: fixed;
  width:100%;
  max-width: 768px;
  top: 0;
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
