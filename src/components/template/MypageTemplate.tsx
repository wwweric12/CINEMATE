import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DivideVector from '../atoms/DivideVector';
import MypageButton from '../molecules/MypageButton';
import { MypageData } from '../../types/GetMypagePayload';

interface MypageTemplateProps {
  myPageData: MypageData;
}

const MypageTemplate = ({ myPageData }: MypageTemplateProps) => {
  return (
    <MypageContainer>
      <TextBox>
        <Name>{myPageData.nickname}</Name>
        <Text> 님의 마이페이지</Text>
      </TextBox>
      <DivideVector />
      <ButtonContainer>
        <Link to="/mypage/reviews">
          <MypageButton count={myPageData.myReviews} content="작성한 리뷰" />
        </Link>
        <Link to="/mypage/movies">
          <MypageButton count={myPageData.likeMovies} content="좋아요한 영화" />
        </Link>
      </ButtonContainer>
    </MypageContainer>
  );
};

export default MypageTemplate;

const MypageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 94px 26px;
`;

const TextBox = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Name = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Text = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px 12px;
`;
