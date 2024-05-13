import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import DivideVector from '../atoms/DivideVector';
import { keywordState } from '../../store/atoms/Keyword/state';
import SearchRecordButton from '../atoms/SearchRecordButton';

const SearchTemplate = () => {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const handleDeleteKeyword = (id: number) => {
    setKeyword((value) => value.filter((item) => item.id !== id));
  };
  return (
    <>
      <TitleContainer>
        <SearchText>최근 검색 기록</SearchText>
        <DivideVector />
        {keyword &&
          keyword.map((item) => (
            <SearchRecordButton
              key={item.id}
              text={item.text}
              onRemoveKeyword={() => handleDeleteKeyword(item.id)}
            />
          ))}
      </TitleContainer>
    </>
  );
};

export default SearchTemplate;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 28px;
`;

const SearchText = styled.div`
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 16px;
`;
