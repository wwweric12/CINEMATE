import styled from 'styled-components';
import { ChangeEventHandler } from 'react';
import InputLength from '../atoms/InputLength';

interface ReviewInput {
  maxLength: number;
  onInputChange: ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
  length: number;
  placeholder: string;
}

const ReviewInput = ({
  maxLength,
  onInputChange,
  value,
  length,
  placeholder,
}: ReviewInput) => {
  return (
    <ReviewContainer>
      <ReviewField
        maxLength={maxLength}
        onChange={onInputChange}
        value={value}
        placeholder={placeholder}
      />
      <LengthContainer>
        <InputLength maxLength={maxLength} length={length} />
      </LengthContainer>
    </ReviewContainer>
  );
};

export default ReviewInput;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  padding: 18px 16px;
  background-color: ${({ theme }) => theme.colors.darkgray4};
  border-radius: 14px;
`;

const ReviewField = styled.textarea`
  width: 100%;
  height: 146px;
  font-size: 16px;
  text-align: left;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const LengthContainer = styled.div`
  display: flex;
  justify-content: end;
`;
