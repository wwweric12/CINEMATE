import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import {
  useEffect,
} from 'react';
import Footer from '../components/organisms/Footer';
import { Header } from '../components/organisms/Header';

const MainLayout = () => {
  const hasFooter = ['/', '/search', '/mypage'];
  const hasNotHeaderPages = ['success'];
  const location = useLocation();
  const params = useParams();
  
  const navigate = useNavigate();
  const accessKey = localStorage.getItem("accessToken");
  
  useEffect(() => {
    if (!accessKey) {
      navigate("/login")
    }
  }, [accessKey]);


  const handlePrevClick = () => {
    if(location.state==="search"){
      navigate("/search");
    }

    else if (location.pathname === `/movies/${params.id}`) {
      navigate(`/`);
    } else {
      navigate(-1);
    }
  };


  return (
    <Container>
      {!hasNotHeaderPages.includes(location.pathname) && (
        <Header
          title="뒤로가기"
          path={location.pathname}
          onPrevClick={handlePrevClick}
        />
      )}
      <Outlet />
      {hasFooter.includes(location.pathname) && (
        <Footer path={location.pathname} />
      )}
    </Container>
  );
};

export default MainLayout;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 768px;
  min-height: 100vh;
  position: relative;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.darkgray2};
`;
