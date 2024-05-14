import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import Footer from '../components/organisms/Footer';
import { Header } from '../components/organisms/Header';

const MainLayout = () => {
  const hasFooter = ['/', 'search', 'mypage'];
  const hasNotHeaderPages = ['success'];
  const location = useLocation();
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();
  const handlePrevClick = () => {
    navigate(-1);
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
