import styled from 'styled-components';
import LoginForm from '../organisms/Login/LoginForm';

const LoginTemplate = () => {
  return (
    <TemplateContainer>
      <LoginForm />
    </TemplateContainer>
  );
};

export default LoginTemplate;

const TemplateContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 170px 40px;
`;
