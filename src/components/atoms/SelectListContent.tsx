import styled from 'styled-components';
import { ReactComponent as HateSvg } from '../../assets/images/not-interested.svg';


interface SelectListContentProps {
  content: string;
  onSelectClick: (movieId?: number) => void;
  movieId?: number;
  img: string;
}

const SelectListContent = ({
  content,
  onSelectClick,
  movieId,
  img,
}: SelectListContentProps) => {
  return (
    <SelectContentBox onClick={() => onSelectClick(movieId)}>
      {img==="not" && <HateSvg/>}
      <SelectContent>{content}</SelectContent>
    </SelectContentBox>
  );
};

export default SelectListContent;

const SelectContentBox = styled.button`
  background-color: ${({ theme }) => theme.colors.darkgray4};
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px;
`;

const SelectContent = styled.div`
  margin-left:12px;
`;
