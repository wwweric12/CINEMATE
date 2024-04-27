import styled from 'styled-components';
import { forwardRef } from 'react';
import { FieldErrors, UseFormRegisterReturn } from 'react-hook-form';
import emailSvg from '../../assets/images/login_email.svg';
import nameSvg from '../../assets/images/login_user.svg';
import passwordSvg from '../../assets/images/login_password.svg';
import errorSvg from '../../assets/images/login_error.svg';
import successSvg from '../../assets/images/login_success.svg';
import { LoginInput } from '../organisms/Login/LoginForm';

interface FormInputProps {
  type: 'name' | 'password' | 'email';
  value?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  validationStatus: 'default' | 'error' | 'success';
  register?: UseFormRegisterReturn;
  errors?: FieldErrors<LoginInput>;
}

const FormInput = forwardRef(
  ({
    type,
    placeholder,
    value,
    onChange,
    validationStatus,
    register,
  }: FormInputProps) => {
    let image;
    if (type === 'name') {
      image = nameSvg;
    } else if (type === 'email') {
      image = emailSvg;
    } else if (type === 'password') {
      image = passwordSvg;
    }

    return (
      <InputContainer $validationStatus={validationStatus}>
        <InputImg src={image} />
        <InputField
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          {...register}
        />
        {validationStatus !== 'default' && (
          <CheckImg
            src={validationStatus === 'error' ? errorSvg : successSvg}
          />
        )}
      </InputContainer>
    );
  },
);
FormInput.displayName = 'FormInput';

export default FormInput;

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
