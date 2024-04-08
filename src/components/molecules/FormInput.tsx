import styled from 'styled-components';
import email from '../../assets/images/login_email.svg';
import name from '../../assets/images/login_user.svg';
import password from '../../assets/images/login_password.svg';
import errorImg from '../../assets/images/login_error.svg';
import success from '../../assets/images/login_success.svg';

interface FormInputProps {
  type: 'name' | 'password' | 'email';
  value?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  isValid: 'default' | 'error' | 'success';
}

const FormInput = ({
  type,
  placeholder,
  value,
  onChange,
  isValid,
}: FormInputProps) => {
  const image =
    type === 'name'
      ? name
      : type === 'email'
        ? email
        : type === 'password'
          ? password
          : name;

  return (
    <InputContainer $isValid={isValid}>
      <InputImg src={image} />
      <InputField
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {isValid !== 'default' && (
        <CheckImg src={isValid === 'error' ? errorImg : success} />
      )}
    </InputContainer>
  );
};

export default FormInput;

const InputContainer = styled.div<{ $isValid?: FormInputProps['isValid'] }>`
  display: flex;
  align-items: center;
  padding: 15px 12px;
  border-radius: 10px;
  border: ${({ theme, $isValid }) => {
      switch ($isValid) {
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
