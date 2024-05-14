import styled from 'styled-components';

interface ListTitleProps {
  title: string;
}

const ListTitle = ({ title }: ListTitleProps) => {
  return (
    <ListTitleField>
      {title}
      <span>추천</span>
    </ListTitleField>
  );
};

export default ListTitle;

const ListTitleField = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.choral};
`;
