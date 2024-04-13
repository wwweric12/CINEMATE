import styled from 'styled-components';

const DivideVector = () => {
  return <Divider></Divider>;
};

export default DivideVector;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.darkgray3};
`;
