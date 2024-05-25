import styled from 'styled-components';
import { ChangeEvent } from 'react';
import { Control, Controller } from 'react-hook-form';
import emailSvg from '../../assets/images/login_email.svg';
import nameSvg from '../../assets/images/login_user.svg';
import passwordSvg from '../../assets/images/login_password.svg';
import errorSvg from '../../assets/images/login_error.svg';
import successSvg from '../../assets/images/login_success.svg';
import { SignupInput } from '../organisms/Signup/SignupForm';

export interface FormInputProps {
  type: 'nickName' | 'password' | 'email';
  value?: string;
  control: Control<SignupInput>;
  placeholder?: string;
  onInputChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  validationStatus: 'default' | 'error' | 'success';
}

const CustomFormInput = ({
  type,
  placeholder,
  control,
  onInputChange,
  validationStatus,
}: FormInputProps) => {
  let image: string;
  if (type === 'nickName') {
    image = nameSvg;
  } else if (type === 'email') {
    image = emailSvg;
  } else if (type === 'password') {
    image = passwordSvg;
  }

  return (
    <Controller
      control={control}
      name={type}
      render={({ field: { onChange, value } }) => (
        <InputContainer $validationStatus={validationStatus}>
          <InputImg src={image} />
          <InputField
            name={type}
            type={type}
            placeholder={placeholder}
            value={value || ''}
            onChange={(event) => {
              onChange(event.target.value);
              onInputChange && onInputChange(event);
            }}
          />
          {validationStatus !== 'default' && (
            <CheckImg
              src={validationStatus === 'error' ? errorSvg : successSvg}
            />
          )}
        </InputContainer>
      )}
    />
  );
};

export default CustomFormInput;

const InputContainer = styled.div<{
  $validationStatus?: FormInputProps['validationStatus'];
}>`
  display: flex;
  align-items: center;
  min-width: 280px;
  padding: 15px 12px;
  border-radius: 10px;
  border: ${({ theme, $validationStatus }) => {
      switch ($validationStatus) {
        case 'success':
          return theme.colors.green;
        case 'error':
          return theme.colors.red;
        case 'default':
          return theme.colors.gray1;
        default:
          return theme.colors.gray1;
      }
    }}
    1px solid;
`;

const InputImg = styled.img`
  margin-right: 14px;
`;

const InputField = styled.input`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray1};
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray1};
  }
`;

const CheckImg = styled.img``;
