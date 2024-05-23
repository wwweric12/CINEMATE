import styled from 'styled-components';
import LoginForm, { LoginFormProps } from '../organisms/Login/LoginForm';

const LoginTemplate = ({ onLoginSubmit }: LoginFormProps) => {
  return (
    <TemplateContainer>
      <LoginForm onLoginSubmit={onLoginSubmit} />
    </TemplateContainer>
  );
};

export default LoginTemplate;

const TemplateContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 170px 40px;
`;
