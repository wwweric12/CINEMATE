import styled from 'styled-components';
import HeartButton from '../atoms/HeartButton';
import MovieGrade from '../atoms/MovieGrade';
import MovieMember from '../atoms/MovieMember';
import RatingMovie from '../organisms/RatingMovie';
import SelectFilter, { SelectFilterProps } from '../molecules/SelectFilter';
import ReviewCard from '../organisms/ReviewCard';

interface MovieDetailTemplate {
  backgroundImg: string;
  date: number;
  title: string;
  grade: number;
  isLiked: boolean;
  onHeartClick: () => void;
  movieImg: string;
  moviePlot: string;
  onSelectChange: (selectoption: SelectFilterProps['defaultOption']) => void;
}

const MEMBER_LIST = [
  { image: '', name: '김남주' },
  { image: '', name: '김남주' },
  { image: '', name: '김남주' },
  { image: '', name: '김남주' },
  { image: '', name: '김남주' },
];

const REVIEW_DATA = [
  {
    id: 123,
    reviewer: '김동영',
    grade: 4.5,
    content: '아니이건좀 아닌데',
    count: 3,
    date: 3,
    isLiked: false,
    isMine: false,
  },
  {
    id: 123123,
    reviewer: '김동영',
    grade: 4.5,
    content: '아니이건좀 아닌데',
    count: 3,
    date: 3,
    isLiked: false,
    isMine: false,
  },
  {
    id: 123123123,
    reviewer: '김동영',
    grade: 4.5,
    content: '아니이건좀 아닌데',
    count: 3,
    date: 3,
    isLiked: false,
    isMine: false,
  },
];

const MovieDetailTemplate = ({
  backgroundImg,
  date,
  title,
  grade,
  isLiked,
  onHeartClick,
  movieImg,
  moviePlot,
  onSelectChange,
}: MovieDetailTemplate) => {
  const handleReviewWrite = () => {};
  const handleHeartClick = (id: number) => {};

  return (
    <>
      <BackgroundContainer image={backgroundImg}>
        <BackgroundImage />
        <MovieHeaderField>
          <MovieInfoContainer>
            <MovieDate>{date}</MovieDate>
            <InfoLayout>
              <MovieTitle>{title}</MovieTitle>
              <MovieGrade grade={grade} />
            </InfoLayout>
          </MovieInfoContainer>
          <ButtonImageLayout>
            <HeartButton isLiked={isLiked} onClick={onHeartClick} />
            <MovieImage src={movieImg} />
          </ButtonImageLayout>
        </MovieHeaderField>
      </BackgroundContainer>
      <FieldContainer>
        <ContentTitle>작품정보</ContentTitle>
        <PlotField>{moviePlot}</PlotField>
        <ContentTitle>감독 및 출연진</ContentTitle>
        <MovieMembersContainer>
          {MEMBER_LIST.map((item) => (
            <>
              <MovieMember image={item.image} name={item.name} />
            </>
          ))}
        </MovieMembersContainer>
        <ContentTitle>리뷰 및 평점</ContentTitle>
        <RatingMovieContainer>
          <RatingMovie onReviewWrite={handleReviewWrite} />
        </RatingMovieContainer>
        <ReviewContainer>
          <ReviewHeader>
            <ReviewTitle>모든 리뷰</ReviewTitle>
            <SelectFilter
              defaultOption="latest"
              onSelectChange={onSelectChange}
            />
          </ReviewHeader>
          <ReviewFieldContainer>
            {REVIEW_DATA.map((item) => (
              <ReviewCard
                key={item.id}
                id={item.id}
                reviewer={item.reviewer}
                grade={item.grade}
                content={item.content}
                count={item.count}
                date={item.date}
                isLiked={item.isLiked}
                isMine={item.isMine}
                onHeartClick={() => handleHeartClick(item.id)}
              />
            ))}
          </ReviewFieldContainer>
        </ReviewContainer>
      </FieldContainer>
    </>
  );
};

export default MovieDetailTemplate;

const BackgroundContainer = styled.div<{ image: string }>`
  position: relative;
  width: 100%;
  height: 209px;
  background: url(${(props) => props.image}) center/cover no-repeat;
  margin-top: 54px;
`;

const BackgroundImage = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

const MovieHeaderField = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 14px 40px 22px 40px;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
`;

const MovieInfoContainer = styled.div`
  display: flex;
  justify-content: end;
  flex-direction: column;
  gap: 7px;
`;

const InfoLayout = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const MovieDate = styled.div`
  color: ${({ theme }) => theme.colors.gray1};
`;

const MovieTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const ButtonImageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  height: 100%;
  justify-content: space-between;
`;

const MovieImage = styled.img`
  width: 90px;
  height: 130px;
  border-radius: 8px;
`;

const FieldContainer = styled.div`
  padding: 26px 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;

const ContentTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 14px;
`;

const PlotField = styled.div`
  display: -webkit-box;
  width: 100%;
  color: ${({ theme }) => theme.colors.gray2};
  font-size: 14px;
  font-weight: 300;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  line-height: 1.4;
  margin-bottom: 28px;
`;

const MovieMembersContainer = styled.div`
  display: flex;
  align-self: center;
  max-height: 204px;
  padding: 20px;
  background-color: rgba(163, 163, 163, 0.1);
  border-radius: 12px;
  gap: 12px;
  flex-wrap: wrap;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  margin-bottom: 22px;
`;

const RatingMovieContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-bottom: 26px;
`;

const ReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 16px;
`;

const ReviewTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
`;

const ReviewFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;
