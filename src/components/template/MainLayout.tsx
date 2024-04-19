import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import Footer from '../organisms/Footer';
import { Header } from '../organisms/Header';

const MainLayout = () => {
  const hasFooter = ['/', 'search', 'mypage'];
  const location = useLocation();
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();
  const handlePrevClick = () => {
    navigate(-1);
  };
  return (
    <Container>
      <Header
        path={location.pathname}
        value={searchInput}
        setSearchInput={setSearchInput}
        onPrevClick={handlePrevClick}
      />
      <Outlet />
      {hasFooter.includes(location.pathname) && <Footer />}
    </Container>
  );
};

export default MainLayout;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;
