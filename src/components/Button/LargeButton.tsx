import styled from 'styled-components';

export interface ButtonProps {
  type?: 'submit' | 'button';
  children: string;
  onClick: () => void;
  state: boolean;
}

const LargeButton = ({ type, children, onClick, state }: ButtonProps) => {
  return (
    <Button type={type} onClick={onClick} $isActive={state}>
      {children}
    </Button>
  );
};

export default LargeButton;

const Button = styled.button<{ $isActive: boolean }>`
  height: 48px;
  padding: 0 108px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.choral : theme.colors.dark_gray3};
  font-size: 19px;
  font-weight: 700;
  border-radius: 10px;
  border: none;
`;
