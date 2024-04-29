import styled from 'styled-components';

import SignupForm from '../organisms/Signup/SignupForm';

const SignupTemplate = () => {
  return (
    <TemplateContainer>
      <SignupForm />
    </TemplateContainer>
  );
};

export default SignupTemplate;

const TemplateContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 170px 40px;
`;
