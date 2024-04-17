import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MainHeader from '../molecules/MainHeader';
import Footer from '../organisms/Footer';

const MainLayout = () => {
  const hasFooter = ['/', 'search', 'mypage'];
  const location = useLocation();
  return (
    <Container>
      <MainHeader />
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
