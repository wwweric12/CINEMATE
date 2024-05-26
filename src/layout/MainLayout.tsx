import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from 'react';
import { useRecoilState } from 'recoil';
import Footer from '../components/organisms/Footer';
import { Header } from '../components/organisms/Header';
import { keywordState } from '../store/atoms/Keyword/state';
import { useSearchMovie } from '../hooks/useSearchMovie';
import { searchState } from '../store/atoms/Search/state';

const MainLayout = () => {
  const hasFooter = ['/', '/search', '/mypage'];
  const hasNotHeaderPages = ['success'];
  const location = useLocation();
  const [searchInput, setSearchInput] = useState('');
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const [searchMovie, setSearchMovie] = useRecoilState(searchState);
  const { SearchMovieState } = useSearchMovie(searchInput);
  const navigate = useNavigate();

  useEffect(() => {
    if (SearchMovieState?.data) {
      setSearchMovie(SearchMovieState.data);
    }
  }, [SearchMovieState]);

  const handlePrevClick = () => {
    navigate(-1);
  };

  const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value === '') {
      setSearchMovie([]);
    }
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const newKeyword = {
      id: Date.now(),
      text: searchInput,
    };
    setKeyword((prev) => [...prev, newKeyword]);
    navigate(`/search/${searchInput}`);
    setSearchInput('');
    setSearchMovie([]);
  };

  return (
    <Container>
      {!hasNotHeaderPages.includes(location.pathname) && (
        <Header
          title="뒤로가기"
          path={location.pathname}
          value={searchInput}
          setSearchInput={setSearchInput}
          onPrevClick={handlePrevClick}
          onSearchSubmit={handleSearchSubmit}
          onSearchChange={handleSearchChange}
        />
      )}
      <Outlet />
      {hasFooter.includes(location.pathname) && <Footer />}
    </Container>
  );
};

export default MainLayout;

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: relative;
  background-color: ${({ theme }) => theme.colors.darkgray2};
`;
