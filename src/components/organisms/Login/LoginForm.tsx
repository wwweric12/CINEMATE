import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../atoms/PrimaryButton';
import FormInput from '../../molecules/FormInput';
import { AuthFormValues } from '../../../types/auth';
import { validation } from './Validation';

export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginFormProps {
  onLoginSubmit: SubmitHandler<AuthFormValues>;
}

const LoginForm = ({ onLoginSubmit }: LoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInput>({
    resolver: yupResolver(validation),
    mode: 'onSubmit',
  });

  return (
    <LoginContainer>
      <Title>로그인</Title>
      <LoginFormBox onSubmit={handleSubmit(onLoginSubmit)}>
        <InputContainer>
          <InputBox>
            <FormInput
              type="email"
              placeholder="이메일을 입력해주세요"
              validationStatus={errors['email'] ? 'error' : 'default'}
              register={register('email')}
              errors={errors}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </InputBox>
          <InputBox>
            <FormInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              validationStatus={errors['password'] ? 'error' : 'default'}
              register={register('password')}
              errors={errors}
            />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </InputBox>
        </InputContainer>
        <PrimaryButton type="submit" size="large" state enabled>
          로그인
        </PrimaryButton>
      </LoginFormBox>
      <LinkContainer>
        <Link to="/signup">
          <SignupLink>회원가입</SignupLink>
        </Link>
      </LinkContainer>
    </LoginContainer>
  );
};

export default LoginForm;

const LoginContainer = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 56px;
  color: ${({ theme }) => theme.colors.gray1};
  line-height: 1.3;
  letter-spacing: -2.5%;
`;

const LoginFormBox = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 6px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 30px;
`;
const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const ErrorMessage = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: red;
  margin: 0 10px;
`;

const LinkContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;

const SignupLink = styled.div`
  font-size: 10px;
  font-weight: 600;
  color: white;
  padding: 6px 2px;
  margin-right: 12px;
  border-bottom: 1px solid white;
`;
