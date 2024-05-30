import styled from 'styled-components';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm, useWatch } from 'react-hook-form';
import { ChangeEvent } from 'react';
import PrimaryButton from '../../atoms/PrimaryButton';
import { AuthFormValues } from '../../../types/auth';
import CustomFormInput from '../../molecules/CustomFormInput';
import { validation } from './Validation';

export interface SignupInput {
  nickName: string;
  email: string;
  password: string;
}

export interface SignupFormProps {
  nameCheck: boolean;
  emailCheck: boolean;
  onSignupSubmit: SubmitHandler<AuthFormValues>;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SignupForm = ({
  onSignupSubmit,
  onInputChange,
  nameCheck,
  emailCheck,
}: SignupFormProps) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignupInput>({
    resolver: yupResolver(validation),
    mode: 'onChange',
  });

  const [nickName, email, password] = useWatch({
    control,
    name: ['nickName', 'email', 'password'],
  });

  const handleSubmitButton = () => {
    const array = [email, nickName, password];
    return array.every((item) => item);
  };

  const handleDuplicatedInput = (type: keyof SignupInput) => {
    if (type === 'email') {
      return emailCheck;
    } else if (type === 'nickName') {
      return nameCheck;
    }
  };

  return (
    <SignupContainer>
      <Title>회원가입</Title>
      <SignupFormBox onSubmit={handleSubmit(onSignupSubmit)}>
        <InputContainer>
          <InputBox>
            <CustomFormInput
              control={control}
              type="nickName"
              placeholder="닉네임을 입력해주세요"
              validationStatus={
                errors['nickName'] || handleDuplicatedInput('nickName')
                  ? 'error'
                  : handleDuplicatedInput('nickName') || !nickName
                    ? 'default'
                    : 'success'
              }
              onInputChange={onInputChange}
            />
            {errors.nickName ? (
              <ErrorMessage>{errors.nickName.message}</ErrorMessage>
            ) : handleDuplicatedInput('nickName') ? (
              <ErrorMessage>중복된 닉네임입니다</ErrorMessage>
            ) : nickName ? (
              <SuccessMessage>사용 가능한 닉네임입니다</SuccessMessage>
            ) : (
              <SignupMessage>2~8글자 이내로 작성해주세요</SignupMessage>
            )}
          </InputBox>
          <InputBox>
            <CustomFormInput
              control={control}
              type="email"
              placeholder="이메일을 입력해주세요"
              validationStatus={
                errors['email'] || handleDuplicatedInput('email')
                  ? 'error'
                  : handleDuplicatedInput('email') || !email
                    ? 'default'
                    : 'success'
              }
              onInputChange={onInputChange}
            />
            {errors.email ? (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            ) : handleDuplicatedInput('email') ? (
              <ErrorMessage>중복된 이메일입니다</ErrorMessage>
            ) : email ? (
              <SuccessMessage>사용 가능한 이메일입니다</SuccessMessage>
            ) : (
              <SignupMessage>이메일 형식에 맞춰서 입력해주세요</SignupMessage>
            )}
          </InputBox>
          <InputBox>
            <CustomFormInput
              control={control}
              type="password"
              placeholder="비밀번호를 입력해주세요"
              validationStatus={
                errors['password'] ? 'error' : !password ? 'default' : 'success'
              }
            />
            {errors.password ? (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            ) : password ? (
              <SuccessMessage>사용 가능한 비밀번호입니다</SuccessMessage>
            ) : (
              <SignupMessage>
                영문과 숫자, 특수기호를 조합하여 6~14글자 이내로 입력해주세요
              </SignupMessage>
            )}
          </InputBox>
        </InputContainer>
        <PrimaryButton
          type="submit"
          size="large"
          state={handleSubmitButton()}
          enabled={handleSubmitButton()}
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

const SuccessMessage = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.green};
  margin: 0 10px;
`;
