import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import DivideVector from '../atoms/DivideVector';
import { keywordState } from '../../store/atoms/Keyword/state';
import SearchRecordButton from '../atoms/SearchRecordButton';
import { searchState } from '../../store/atoms/Search/state';
import SearchCard from '../atoms/SearchCard';

const SearchTemplate = () => {
  const [searchMovie, setSearchMovie] = useRecoilState(searchState);
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const handleDeleteKeyword = (id: number) => {
    setKeyword((value) => value.filter((item) => item.id !== id));
  };
  if (searchMovie && searchMovie?.length !== 0) {
    return (
      <ListContainer>
        {searchMovie?.map((item) => (
          <Link to={`/movies/${item.id}`} key={item.id}>
            <SearchCard movieImg={item.posterPath} title={item.movieTitle} />
          </Link>
        ))}
      </ListContainer>
    );
  } else {
    return (
      <>
        <TitleContainer>
          <SearchText>최근 검색 기록</SearchText>
          <DivideVector />
          <SearchRecordContainer>
            {keyword &&
              keyword.map((item) => (
                <SearchRecordButton
                  key={item.id}
                  text={item.text}
                  onKeywordRemove={() => handleDeleteKeyword(item.id)}
                />
              ))}
          </SearchRecordContainer>
        </TitleContainer>
      </>
    );
  }
};

export default SearchTemplate;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 40px;
`;

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

const SearchRecordContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;
