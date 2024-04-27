import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import PrimaryButton from '../../atoms/PrimaryButton';
import FormInput from '../../molecules/FormInput';
import { validation } from './Validation';

export interface SignupInput {
  name: string;
  email: string;
  password: string;
}

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SignupInput>({
    resolver: yupResolver(validation),
    mode: 'onSubmit',
  });

  const value = watch();

  const onSubmit: SubmitHandler<SignupInput> = (data) => {
    console.log(data);
  };
  return (
    <SignupContainer>
      <Title>회원가입</Title>
      <SignupFormBox onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <InputBox>
            <FormInput
              type="name"
              placeholder="닉네임을 입력해주세요"
              isValid={errors['name'] ? 'error' : 'default'}
              register={register('name')}
              errors={errors}
            />
            {errors.name ? (
              <ErrorMessage>{errors.name.message}</ErrorMessage>
            ) : (
              <SignupMessage>2~8글자 이내로 작성해주세요</SignupMessage>
            )}
          </InputBox>
          <InputBox>
            <FormInput
              type="email"
              placeholder="이메일을 입력해주세요"
              isValid={errors['email'] ? 'error' : 'default'}
              register={register('email')}
              errors={errors}
            />
            {errors.email ? (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            ) : (
              <SignupMessage>이메일 형식에 맞춰서 입력해주세요</SignupMessage>
            )}
          </InputBox>
          <InputBox>
            <FormInput
              type="password"
              placeholder="비밀번호를 입력해주세요"
              isValid={errors['password'] ? 'error' : 'default'}
              register={register('password')}
              errors={errors}
            />
            {errors.password ? (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            ) : (
              <SignupMessage>
                영문과 숫자, 특수기호를 조합하여 8~14글자 이내로 입력해주세요
              </SignupMessage>
            )}
          </InputBox>
        </InputContainer>
        <PrimaryButton
          type="submit"
          size="large"
          state={!!value.email && !!value.name && !!value.password}
        >
          회원가입
        </PrimaryButton>
      </SignupFormBox>
    </SignupContainer>
  );
};

export default SignupForm;

const SignupContainer = styled.div`
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
`;

const SignupFormBox = styled.form`
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
  width: min-content;
  flex-direction: column;
  gap: 4px;
`;

const SignupMessage = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.gray1};
  font-weight: 500;
  margin: 0 10px;
`;

const ErrorMessage = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: red;
  margin: 0 10px;
`;
