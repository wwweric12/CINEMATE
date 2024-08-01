import styled from 'styled-components';
import { ChangeEvent, forwardRef } from 'react';
import { UseFormRegisterReturn, UseFormSetValue} from 'react-hook-form';
import emailSvg from '../../assets/images/login_email.svg';
import passwordSvg from '../../assets/images/login_password.svg';
import errorSvg from '../../assets/images/login_error.svg';
import successSvg from '../../assets/images/login_success.svg';
import { LoginInput } from '../organisms/Login/LoginForm';

export interface FormInputProps {
  type:  'password' | 'email';
  value?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  validationStatus: 'default' | 'error' | 'success';
  register?: UseFormRegisterReturn;
  duplicatedStatus?: boolean;
  setValue: UseFormSetValue<LoginInput>
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      type,
      placeholder,
      value,
      validationStatus,
      register,
      setValue,
    }: FormInputProps,
    ref,
  ) => {
    let image;
     if (type === 'email') {
      image = emailSvg;
    } else if (type === 'password') {
      image = passwordSvg;
    }
    const handleRemoveValue =(type:FormInputProps["type"])=>{
      setValue(type,"")
    }

    return (
      <InputContainer $validationStatus={validationStatus}>
        <InputImg src={image} />
        <InputField
          ref={ref}
          type={type}
          placeholder={placeholder}
          value={value}
          {...register}
        />
        {validationStatus === 'error' &&   <RemoveButton onClick={()=>handleRemoveValue(type)}><CheckImg src={errorSvg}/></RemoveButton>}
        {validationStatus === 'success' &&   <CheckImg src={successSvg}/>}
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

const RemoveButton = styled.button``;
