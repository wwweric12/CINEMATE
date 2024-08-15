import styled from 'styled-components';
import HeartButton from '../atoms/HeartButton';
import MovieGrade from '../atoms/MovieGrade';
import MovieMember from '../atoms/MovieMember';
import RatingMovie from '../organisms/RatingMovie';
import SelectFilter, { SelectOption } from '../molecules/SelectFilter';
import ReviewCard from '../organisms/ReviewCard';
import { MovieData } from '../../types/GetMovieListPayload';
import { Credit } from '../../types/GetMovieDetailPayload';
import { PutRatingProps } from '../../api/ratingFetcher';
import { Review } from '../../types/GetReviewPayload';
import { ReviewProps } from '../../api/likeFetcher';
import { getYearFromDate } from '../../util/date';
import NoReviewCard from '../atoms/NoReviewCard';
import { noPosterImage } from '../../util/noImage';
import MovieList from '../organisms/MovieList';
import { RelativeMovie } from '../../types/GetRelativeMovies';
import { ReactComponent as KebabSvg } from '../../assets/images/kebab.svg';


interface MovieDetailTemplateProps {
  score: number;
  orderby: SelectOption;
  setOrderby: React.Dispatch<React.SetStateAction<SelectOption>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  movie: MovieData;
  credit: Credit;
  reviewState: Review[];
  relativeMoviesState: RelativeMovie[];
  onRatingClick: ({ movieId, rating }: PutRatingProps) => void;
  onDeleteClick: (movieId: number) => void;
  onMovieHeartClick: (movieId: number) => void;
  onMovieKebabClick: (movieId: number) => void;
  onReviewHeartClick: ({ movieId, reviewId }: ReviewProps) => void;
}

const MovieDetailTemplate = ({
  orderby,
  setOrderby,
  score,
  setScore,
  reviewState,
  movie,
  credit,
  relativeMoviesState,
  onRatingClick,
  onDeleteClick,
  onMovieHeartClick,
  onMovieKebabClick,
  onReviewHeartClick,
}: MovieDetailTemplateProps) => {
  return (
    <>
      <BackgroundContainer image={movie.backdropPath}>
        <BackgroundImage />
        <MovieHeaderField>
          <MovieInfoContainer>
            <KebabButton onClick={() => onMovieKebabClick(movie.id)}>
              <KebabImg/>
            </KebabButton>
            <InfoBox>
            <MovieDate>{getYearFromDate(movie.releaseDate)}</MovieDate>
            <InfoLayout>
              <MovieTitle>{movie.movieTitle}</MovieTitle>
              <MovieGrade grade={movie.rating} />
            </InfoLayout>
            </InfoBox>
          </MovieInfoContainer>
          <ButtonImageLayout>
            <HeartButton
              isLiked={movie.isLiked}
              onClick={() => onMovieHeartClick(movie.id)}
            />
            <MovieImage src={noPosterImage(movie.posterPath)} />
          </ButtonImageLayout>
        </MovieHeaderField>
      </BackgroundContainer>
      <FieldContainer>
        <ContentTitle>작품정보</ContentTitle>
        <PlotField>{movie.overview}</PlotField>
        {credit.crew[0] && (
          <>
            <ContentTitle>감독</ContentTitle>
            <DirectorContainer>
              <MovieMember
                image={credit.crew[0].profile_path}
                name={credit.crew[0].name}
              />
            </DirectorContainer>
          </>
        )}
        {credit.cast && (
          <>
            <ContentTitle>출연진</ContentTitle>
            <MovieMembersContainer>
              {credit.cast.map((item) => (
                <MovieMember
                  key={item.id}
                  image={item.profile_path}
                  name={item.name}
                />
              ))}
            </MovieMembersContainer>
          </>
        )}
        <ContentTitle>리뷰 및 평점</ContentTitle>
        <RatingMovieContainer>
          <RatingMovie
            movieId={movie.id}
            onRatingClick={onRatingClick}
            score={score}
            setScore={setScore}
          />
        </RatingMovieContainer>
        <ReviewContainer>
          <ReviewHeader>
            <ReviewTitle>모든 리뷰</ReviewTitle>
            {reviewState.length !== 0 && (
              <SelectFilter defaultOption={orderby} setOrderby={setOrderby} />
            )}
          </ReviewHeader>
          <ReviewFieldContainer>
            {reviewState.length ? (
              reviewState.map((item) => (
                <ReviewCard
                  key={item.id}
                  id={item.id}
                  movieId={item.movieId}
                  reviewer={item.member.nickName}
                  grade={item.rating}
                  content={item.content}
                  count={item.likes}
                  date={item.createdAt}
                  isLiked={item.isLiked}
                  isMine={item.isMine}
                  onDeleteClick={() => onDeleteClick(item.movieId)}
                  onReviewHeartClick={onReviewHeartClick}
                />
              ))
            ) : (
              <NoReviewCard
                title="작성된 리뷰가 없습니다"
                desc="영화에 대한 리뷰를 작성해보세요"
              />
            )}
          </ReviewFieldContainer>
        </ReviewContainer>
      </FieldContainer>
      <RelativeContainer>
        <ContentTitle>관련된 영화</ContentTitle>
        <MovieList
          listData={relativeMoviesState}
          onMovieHeartClick={onMovieHeartClick}
        />
      </RelativeContainer>
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
  flex-direction: column;
  justify-content: space-between;
  gap: 7px;
`;


const KebabImg = styled(KebabSvg)`
`;

const KebabButton = styled.button`
  width:min-content;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`

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

const DirectorContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: rgba(163, 163, 163, 0.1);
  border-radius: 12px;
  margin-bottom: 22px;
`;

const MovieMembersContainer = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
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

const RelativeContainer = styled.div`
  position: relative;
  padding: 40px;
`;
