import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import SelectListContent from '../atoms/SelectListContent';
import { PostMovieHates } from '../../api/likeFetcher';
import { backgroundState } from '../../store/atoms/Background/state';

interface SelectListProps {
  movieId?: number;
}

const SelectList = ({ movieId }: SelectListProps) => {
  const [background, setBackground] = useRecoilState(backgroundState);
  const handleSelectClick = async (movieId?: number) => {
    if (movieId) {
      const res = await PostMovieHates({ movieId });
      setBackground(false);
      alert(res?.data);
    }
  };
  return (
    <SelectContainer>
      <GrayLine />
      <SelectListContent
        img="not"
        content="관심없음으로 등록하기"
        onSelectClick={handleSelectClick}
        movieId={movieId}
      />
    </SelectContainer>
  );
};

export default SelectList;

const SelectContainer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.darkgray4};
  border-radius: 18px 18px 0 0;
  padding: 10px 24px;
  z-index: 60;
`;

const GrayLine = styled.div`
  width: 40px;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.gray2};
`;
