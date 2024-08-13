import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import DivideVector from '../atoms/DivideVector';
import MypageButton from '../molecules/MypageButton';
import { MypageData } from '../../types/GetMypagePayload';

interface MypageTemplateProps {
  myPageData: MypageData;
}

const MypageTemplate = ({ myPageData }: MypageTemplateProps) => {
  const navigate = useNavigate()
  const handleReviewClick=()=>{
    navigate("/mypage/reviews")
  }
  const handleMovieClick=()=>{
    navigate("/mypage/movies")
  }
  const handleLogoutClick=()=>{
    localStorage.removeItem("accessToken")
    alert("로그아웃 되었습니다.")
    navigate("/login")
  }
  
  const handleGenreModify=()=>{
    navigate("/survey/genre/modified")
  }

  return (
    <MypageContainer>
      <TextBox>
        <Name>{myPageData.nickname}</Name>
        <Text> 님의 마이페이지</Text>
      </TextBox>
      <DivideVector />
      <ButtonContainer>
          <MypageButton count={myPageData.myReviews} content="작성한 리뷰"  onClick={handleReviewClick}/>
          <MypageButton count={myPageData.likeMovies} content="좋아요한 영화" onClick={handleMovieClick} />
          <MypageButton content="장르 수정하기" onClick={handleGenreModify}/>
          <MypageButton content="로그아웃" onClick={handleLogoutClick}/>
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

