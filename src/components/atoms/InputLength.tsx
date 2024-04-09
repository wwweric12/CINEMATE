import styled from 'styled-components';

interface InputLengthProps {
  maxLength: number;
  length: number;
}

const InputLength = ({ maxLength, length }: InputLengthProps) => {
  return (
    <LengthField>
      {length}/{maxLength}
    </LengthField>
  );
};

export default InputLength;

const LengthField = styled.div`
  color: ${({ theme }) => theme.colors.gray2};
  font-size: 12px;
`;
