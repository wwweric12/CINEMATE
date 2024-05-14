import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoField>
      CINE<span>MATE</span>
    </LogoField>
  );
};

export default Logo;

const LogoField = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.choral};
`;
