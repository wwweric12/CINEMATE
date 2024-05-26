import styled from 'styled-components';

import SignupForm, { SignupFormProps } from '../organisms/Signup/SignupForm';

const SignupTemplate = ({
  onSignupSubmit,
  onInputChange,
  emailCheck,
  nameCheck,
}: SignupFormProps) => {
  return (
    <TemplateContainer>
      <SignupForm
        nameCheck={nameCheck}
        emailCheck={emailCheck}
        onInputChange={onInputChange}
        onSignupSubmit={onSignupSubmit}
      />
    </TemplateContainer>
  );
};

export default SignupTemplate;

const TemplateContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 170px 40px;
`;
