import styled from 'styled-components';
import Logo from '../atoms/Logo';

const MainHeader = () => {
  return (
    <MainHeaderContainer>
      <Logo />
    </MainHeaderContainer>
  );
};

export default MainHeader;

const MainHeaderContainer = styled.div`
  width: 100%;
  padding: 20px 40px;
`;
