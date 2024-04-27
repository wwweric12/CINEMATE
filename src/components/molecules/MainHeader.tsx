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
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px 40px;
  background-color: ${({ theme }) => theme.colors.darkgray2};
`;
